"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const HTTPExtensions_1 = require("../types/HTTPExtensions");
function errorMiddleware(error, req, res, next) {
    const status = error.status || 500;
    const message = !(error instanceof HTTPExtensions_1.HTTPException)
        ? "Something went wrong"
        : error.message || "Something went wrong";
    const serverMessage = error.message || "Something went wrong";
    const errors = error.errors;
    console.error({ status, serverMessage, errors });
    res.status(status).send({ status, message });
}
exports.errorMiddleware = errorMiddleware;
