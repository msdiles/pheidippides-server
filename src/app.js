"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errorMiddleware_1 = require("./middlewares/errorMiddleware");
class App {
    constructor(appInit) {
        this.app = express_1.default();
        this.http = require("http").Server(this.app);
        this.port = appInit.port;
        this.io = require("socket.io")(this.http);
        this.middlewares(appInit.middlewares);
        this.routers(appInit.routers);
        this.socketHandler(appInit.socketHandler);
        this.errorHandler();
    }
    middlewares(middlewares) {
        middlewares.forEach((middleware) => {
            this.app.use(middleware);
        });
    }
    routers(routers) {
        routers.forEach((router) => {
            this.app.use(router.path, ...router.middlewares, router.router);
        });
    }
    socketHandler(Handler) {
        new Handler(this.io);
    }
    errorHandler() {
        this.app.use(errorMiddleware_1.errorMiddleware);
    }
    listen() {
        if (process.env.NODE_ENV !== "test")
            this.http.listen(this.port, () => {
                console.log(`⚡️[server]:Server is running at http://localhost:${this.port}`);
            });
    }
}
exports.default = App;
