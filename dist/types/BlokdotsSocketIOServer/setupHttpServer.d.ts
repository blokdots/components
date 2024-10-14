import http from "http";
declare const setupHttpServer: () => http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
export default setupHttpServer;
