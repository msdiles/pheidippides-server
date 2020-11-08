"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPException = void 0;
class HTTPException extends Error {
    constructor(status, message, errors) {
        super(message);
        this.message = message;
        this.status = status;
        this.errors = errors;
    }
}
exports.HTTPException = HTTPException;
