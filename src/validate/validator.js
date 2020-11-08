"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const HTTPExtensions_1 = require("../types/HTTPExtensions");
class Validator {
}
Validator.validate = (req, res, next) => {
    try {
        const errors = express_validator_1.validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        const extractedErrors = [];
        errors
            .array()
            .map((err) => extractedErrors.push({ [err.param]: err.msg }));
        throw new HTTPExtensions_1.HTTPException(422, "Invalid format", extractedErrors);
    }
    catch (e) {
        next(e);
    }
};
exports.default = Validator;
