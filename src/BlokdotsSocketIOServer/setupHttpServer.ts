import { Readable } from "stream";
import http from "http";

import favicon from "./webserver/favicon.ico";
import index from "./webserver/index.html";
import logArrowIn from "./webserver/log-arrow-in.svg";
import logArrowOut from "./webserver/log-arrow-out.svg";
import socketIOJS from "./webserver/socket-io.min.js";
import style from "./webserver/style.css";

const setupHttpServer = () => {
  const httpServer = http.createServer((req, res) => {
    const headers: http.OutgoingHttpHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
      "Access-Control-Max-Age": 2592000, // 30 days
      "Cache-Control": "max-age=86400",
      /** add other headers as per requirement */
    };

    if (req.method === "OPTIONS") {
      res.writeHead(204, headers);
      res.end();
      return;
    }

    let file = null;

    switch (req.url) {
      case "/favicon.ico":
        headers["Content-Type"] = "image/x-icon";
        file = favicon;
        break;
      case "/style.css":
        headers["Content-Type"] = "text/css";
        file = style;
        break;
      case "/socket-io.min.js":
        headers["Content-Type"] = "text/javascript";
        file = socketIOJS;
        break;
      case "/log-arrow-out.svg":
        headers["Content-Type"] = "image/svg+xml";
        file = logArrowOut;
        break;
      case "/log-arrow-in.svg":
        headers["Content-Type"] = "image/svg+xml";
        file = logArrowIn;
        break;
      default:
        headers["Content-Type"] = "text/html";
        delete headers["Cache-Control"];
        file = index;
    }

    res.writeHead(200, headers);

    const buffer = new Buffer(file, "base64");
    const stream = new Readable();
    stream.push(buffer);
    stream.push(null);

    stream.pipe(res);
  });

  return httpServer;
};

export default setupHttpServer;
