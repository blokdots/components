import http from "http";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Handle __dirname in both CJS and ESM, with support for Electron asar packaging
const getWebRoot = () => {
  let webRoot: string | undefined;

  const isDev = process.env.NODE_ENV === "development";

  // ALWAYS log environment info to help debug Finder vs terminal launch differences
  console.log("[BlokdotsSocketIOServer] Environment info:");
  console.log("  - NODE_ENV:", process.env.NODE_ENV);
  console.log("  - process.cwd():", process.cwd());
  console.log("  - process.argv[0]:", process.argv[0]);
  if ((process as any).resourcesPath) {
    console.log("  - process.resourcesPath:", (process as any).resourcesPath);
  }

  // First, try to resolve using require.resolve to find the actual package location
  // This works best in development with workspace packages
  try {
    const packageJsonPath =
      require.resolve("@blokdots/components/package.json");
    const packageRoot = path.dirname(packageJsonPath);

    if (isDev) {
      console.log(
        "[BlokdotsSocketIOServer] Found package via require.resolve:",
        packageRoot
      );
    }

    // If we're inside an asar file, replace with unpacked path
    let resolvedPackageRoot = packageRoot;
    if (packageRoot.includes(".asar")) {
      resolvedPackageRoot = packageRoot.replace(
        /\.asar([\/\\])/,
        ".asar.unpacked$1"
      );
      if (isDev) {
        console.log(
          "[BlokdotsSocketIOServer] Adjusted for asar unpacked:",
          resolvedPackageRoot
        );
      }
    }

    // Try the dist location first (production build)
    const distWebRoot = path.join(resolvedPackageRoot, "dist/webserver");
    if (isDev) {
      console.log(
        "[BlokdotsSocketIOServer] Checking dist path:",
        distWebRoot,
        "exists:",
        existsSync(distWebRoot)
      );
    }
    if (existsSync(distWebRoot)) {
      webRoot = distWebRoot;
      if (isDev) {
        console.log(
          "[BlokdotsSocketIOServer] ✅ Found webserver via require.resolve (dist):",
          webRoot
        );
      }
    } else {
      // Fall back to source location (development)
      const srcWebRoot = path.join(
        resolvedPackageRoot,
        "src/BlokdotsSocketIOServer/webserver"
      );
      if (isDev) {
        console.log(
          "[BlokdotsSocketIOServer] Checking src path:",
          srcWebRoot,
          "exists:",
          existsSync(srcWebRoot)
        );
      }
      if (existsSync(srcWebRoot)) {
        webRoot = srcWebRoot;
        if (isDev) {
          console.log(
            "[BlokdotsSocketIOServer] ✅ Found webserver via require.resolve (src):",
            webRoot
          );
        }
      }
    }
  } catch (e) {
    // require.resolve failed, will use fallback
    if (isDev) {
      console.log("[BlokdotsSocketIOServer] require.resolve failed:", e);
    }
  }

  // If we still don't have a valid webRoot, try __dirname-based resolution
  if (!webRoot) {
    if (typeof __dirname !== "undefined") {
      const dirname = __dirname;

      // If we're inside any asar file, we need special handling
      if (dirname.includes(".asar")) {
        // Check if it's electron.asar (dev mode) or app.asar (packaged)
        if (dirname.includes("electron.asar")) {
          // In Electron dev mode, navigate up to find the actual app directory
          // The pattern is usually: /path/to/app/node_modules/electron/dist/...
          // We need to go back to the app root
          // Support both forward slashes and backslashes for cross-platform compatibility
          const electronIndex = dirname.search(/node_modules[\\/]electron/);
          if (electronIndex > 0) {
            const appRoot = dirname.substring(0, electronIndex);
            // Try to find the components package from the app root
            const possiblePaths = [
              path.join(
                appRoot,
                "node_modules/@blokdots/components/dist/webserver"
              ),
              path.join(appRoot, "components/dist/webserver"),
              path.join(
                appRoot,
                "components/src/BlokdotsSocketIOServer/webserver"
              ),
              path.join(appRoot, "../components/dist/webserver"),
              path.join(
                appRoot,
                "../components/src/BlokdotsSocketIOServer/webserver"
              ),
            ];

            for (const possiblePath of possiblePaths) {
              if (existsSync(possiblePath)) {
                webRoot = possiblePath;
                break;
              }
            }
          }

          // If still not found, DO NOT use dirname as fallback
          // This prevents the incorrect path seen in the error
          console.log(
            "[BlokdotsSocketIOServer] Could not find webserver in electron.asar mode. Tried app root:",
            electronIndex > 0 ? dirname.substring(0, electronIndex) : "N/A"
          );
        } else if (dirname.includes("app.asar")) {
          // In packaged app, __dirname points to build/ inside app.asar
          // We need to find node_modules/@blokdots/components in app.asar.unpacked
          // Extract the app.asar path and replace with app.asar.unpacked
          const asarMatch = dirname.match(/(.*app\.asar)/);
          if (asarMatch) {
            const asarPath = asarMatch[1];
            const unpackedPath = asarPath.replace(/\.asar$/, ".asar.unpacked");
            const candidatePath = path.join(
              unpackedPath,
              "node_modules/@blokdots/components/dist/webserver"
            );
            if (existsSync(candidatePath)) {
              webRoot = candidatePath;
              console.log(
                "[BlokdotsSocketIOServer] Found webserver in app.asar.unpacked:",
                webRoot
              );
            }
          }
        }
        // DO NOT add fallback for generic asar handling - it creates wrong paths
      } else {
        // Normal case: not in asar - assume we're running from the built package itself
        const candidatePath = path.join(dirname, "webserver");
        if (existsSync(candidatePath)) {
          webRoot = candidatePath;
          console.log(
            "[BlokdotsSocketIOServer] Found webserver relative to __dirname:",
            webRoot
          );
        }
      }
    } else {
      // In ESM (during dev), use import.meta.url
      const __filename = fileURLToPath(import.meta.url);
      const dirName = path.dirname(__filename);
      const candidatePath = path.join(dirName, "webserver");
      if (existsSync(candidatePath)) {
        webRoot = candidatePath;
        console.log(
          "[BlokdotsSocketIOServer] Found webserver via import.meta.url:",
          webRoot
        );
      }
    }
  }

  // Try Electron-specific paths using process.resourcesPath (packaged app)
  if (!webRoot && (process as any).resourcesPath) {
    console.log(
      "[BlokdotsSocketIOServer] Trying Electron resourcesPath:",
      (process as any).resourcesPath
    );

    const electronPaths = [
      // Standard Electron packaged app structure
      path.join(
        (process as any).resourcesPath,
        "app.asar.unpacked/node_modules/@blokdots/components/dist/webserver"
      ),
      path.join(
        (process as any).resourcesPath,
        "app.asar/node_modules/@blokdots/components/dist/webserver"
      ),
      // Alternative locations
      path.join(
        (process as any).resourcesPath,
        "../app.asar.unpacked/node_modules/@blokdots/components/dist/webserver"
      ),
    ];

    for (const electronPath of electronPaths) {
      console.log(
        "[BlokdotsSocketIOServer] Checking Electron path:",
        electronPath,
        "exists:",
        existsSync(electronPath)
      );
      if (existsSync(electronPath)) {
        webRoot = electronPath;
        console.log(
          "[BlokdotsSocketIOServer] ✅ Found webserver via Electron resourcesPath:",
          webRoot
        );
        break;
      }
    }
  }

  // Last resort: try workspace monorepo relative paths from process.cwd()
  if (!webRoot) {
    console.log(
      "[BlokdotsSocketIOServer] Trying workspace monorepo paths from cwd:",
      process.cwd()
    );

    const workspacePaths = [
      path.join(process.cwd(), "components/dist/webserver"),
      path.join(
        process.cwd(),
        "components/src/BlokdotsSocketIOServer/webserver"
      ),
      path.join(process.cwd(), "../components/dist/webserver"),
      path.join(
        process.cwd(),
        "../components/src/BlokdotsSocketIOServer/webserver"
      ),
    ];

    for (const workspacePath of workspacePaths) {
      console.log(
        "[BlokdotsSocketIOServer] Checking workspace path:",
        workspacePath,
        "exists:",
        existsSync(workspacePath)
      );
      if (existsSync(workspacePath)) {
        webRoot = workspacePath;
        console.log(
          "[BlokdotsSocketIOServer] ✅ Found webserver via workspace path:",
          webRoot
        );
        break;
      }
    }
  }

  if (!webRoot) {
    console.error(
      "[BlokdotsSocketIOServer] ❌ FAILED to find webserver directory. Debug info:"
    );
    console.error("  - NODE_ENV:", process.env.NODE_ENV);
    console.error("  - typeof __dirname:", typeof (global as any).__dirname);
    console.error("  - process.cwd():", process.cwd());
    console.error("  - __filename (ESM):", import.meta.url);
    console.error("  - process.resourcesPath:", (process as any).resourcesPath);
  }

  return webRoot;
};

// Lazy initialization of WEB_ROOT and files
// This prevents errors during browser builds where these files don't exist
let WEB_ROOT: string | undefined = undefined;
let files: Record<string, () => string | Buffer> | undefined = undefined;

// Memoize small files in memory (fast + simple)
// Include error handling for file reads
const memo = <T>(fn: () => T) => {
  let v: T | undefined;
  return () => {
    if (v === undefined) {
      try {
        v = fn();
      } catch (error) {
        console.error("[BlokdotsSocketIOServer] Error reading file:", error);
        throw error;
      }
    }
    return v;
  };
};

const initializeWebRoot = () => {
  if (WEB_ROOT !== undefined) return;

  WEB_ROOT = getWebRoot();

  // Ensure WEB_ROOT is valid
  if (!WEB_ROOT) {
    console.error(
      "[BlokdotsSocketIOServer] ❌ CRITICAL: WEB_ROOT is null/undefined"
    );
    console.error("[BlokdotsSocketIOServer] process.cwd():", process.cwd());
    console.error("[BlokdotsSocketIOServer] NODE_ENV:", process.env.NODE_ENV);
    throw new Error(
      "[BlokdotsSocketIOServer] Could not find webserver directory. This is likely a packaging issue."
    );
  }

  // Always log WEB_ROOT to help debug packaging issues
  console.log("[BlokdotsSocketIOServer] ✅ WEB_ROOT resolved to:", WEB_ROOT);

  // Initialize files after WEB_ROOT is set
  files = {
    "favicon.ico": memo(() =>
      readFileSync(path.join(WEB_ROOT!, "favicon.ico"))
    ), // Buffer
    "style.css": memo(() =>
      readFileSync(path.join(WEB_ROOT!, "style.css"), "utf8")
    ), // string
    "socket-io.min.js": memo(() =>
      readFileSync(path.join(WEB_ROOT!, "socket-io.min.js"), "utf8")
    ),
    "log-arrow-in.svg": memo(() =>
      readFileSync(path.join(WEB_ROOT!, "log-arrow-in.svg"), "utf8")
    ),
    "log-arrow-out.svg": memo(() =>
      readFileSync(path.join(WEB_ROOT!, "log-arrow-out.svg"), "utf8")
    ),
    "index.html": memo(() =>
      readFileSync(path.join(WEB_ROOT!, "index.html"), "utf8")
    ),
  };
};

const setupHttpServer = () => {
  // Initialize WEB_ROOT and files on first call
  initializeWebRoot();

  const httpServer = http.createServer((req, res) => {
    const headers: http.OutgoingHttpHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
      "Access-Control-Max-Age": 2592000, // 30 days
      "Cache-Control": "max-age=86400",
    };

    if (req.method === "OPTIONS") {
      res.writeHead(204, headers);
      res.end();
      return;
    }

    let contentType = "text/html";
    let body: string | Buffer;

    switch (req.url) {
      case "/favicon.ico":
        contentType = "image/x-icon";
        body = files!["favicon.ico"]();
        break;
      case "/style.css":
        contentType = "text/css; charset=utf-8";
        body = files!["style.css"]();
        break;
      case "/socket-io.min.js":
        contentType = "text/javascript; charset=utf-8";
        body = files!["socket-io.min.js"]();
        break;
      case "/log-arrow-out.svg":
        contentType = "image/svg+xml; charset=utf-8";
        body = files!["log-arrow-out.svg"]();
        break;
      case "/log-arrow-in.svg":
        contentType = "image/svg+xml; charset=utf-8";
        body = files!["log-arrow-in.svg"]();
        break;
      default:
        delete headers["Cache-Control"]; // don't cache HTML
        contentType = "text/html; charset=utf-8";
        body = files!["index.html"]();
    }

    res.writeHead(200, { ...headers, "Content-Type": contentType });
    res.end(body); // Buffer or string both OK
  });

  return httpServer;
};

export default setupHttpServer;
