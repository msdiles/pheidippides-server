"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const app_1 = __importDefault(require("./app"));
const mongoConnect_1 = __importDefault(require("./utils/mongoConnect"));
const auth_routes_1 = __importDefault(require("./routers/auth.routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const SocketHandler_1 = __importDefault(require("./socket/SocketHandler"));
const team_routes_1 = __importDefault(require("./routers/team.routes"));
const board_routes_1 = __importDefault(require("./routers/board.routes"));
const user_routes_1 = __importDefault(require("./routers/user.routes"));
const app = new app_1.default({
    port: +process.env.PORT || 3000,
    middlewares: [
        cors_1.default({
            credentials: true,
            origin: process.env.CLIENT_URL,
        }),
        compression_1.default(),
        helmet_1.default(),
        morgan_1.default("dev"),
        cookie_parser_1.default(),
        express_1.default.json(),
        express_1.default.urlencoded({ extended: true }),
    ],
    routers: [
        new auth_routes_1.default([]),
        new team_routes_1.default([]),
        new board_routes_1.default([]),
        new user_routes_1.default([]),
    ],
    socketHandler: SocketHandler_1.default,
});
mongoConnect_1.default()
    .then(() => app.listen())
    .catch((e) => console.log(e));
exports.default = app;
