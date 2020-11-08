"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
class SocketHandler {
    constructor(socket) {
        this.CheckToken = (socket, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const token = socket.handshake.query.token;
                yield auth_controller_1.default.asyncVerify(token, process.env.ACCESS_SECRET_KEY);
                return next();
            }
            catch (e) {
                return next(new Error("Authorization error"));
            }
        });
        this.io = socket;
        this.io.use(this.CheckToken);
        this.io.on("connection", (socket) => {
            console.log("Connection");
            this.io.emit("message", "Asdasd");
            console.log(socket.handshake.query.token);
            socket.on("disconnect", () => {
                console.log("socket", "DISCONNECT");
            });
        });
    }
}
exports.default = SocketHandler;
