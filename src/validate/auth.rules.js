"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRules = void 0;
const express_validator_1 = require("express-validator");
class AuthRules {
}
exports.AuthRules = AuthRules;
AuthRules.emailRules = () => {
    return [
        express_validator_1.check("data.email")
            .not()
            .isEmpty()
            .withMessage("Email is Empty")
            .isEmail()
            .normalizeEmail()
            .withMessage("Email is invalid")
            .isLength({ min: 5 })
            .withMessage("Length less than 5 characters")
            .isLength({ max: 128 })
            .withMessage("Length more than 128 characters")
            .trim(),
    ];
};
AuthRules.signupRules = () => {
    return [
        express_validator_1.check("data.email")
            .not()
            .isEmpty()
            .withMessage("Email is Empty")
            .isEmail()
            .normalizeEmail()
            .withMessage("Email is invalid")
            .isLength({ min: 5 })
            .withMessage("Length less than 5 characters")
            .isLength({ max: 128 })
            .withMessage("Length more than 128 characters")
            .trim(),
        express_validator_1.check("data.username")
            .not()
            .isEmpty()
            .withMessage("Username is Empty")
            .isLength({ min: 6, max: 128 })
            .withMessage("Length less than 3 characters or more then 128")
            .trim(),
        express_validator_1.check("data.password")
            .not()
            .isEmpty()
            .withMessage("Password is Empty")
            .isLength({ min: 8, max: 128 })
            .withMessage("Length less than 6 characters or more then 128")
            .trim(),
    ];
};
AuthRules.signinRules = () => {
    return [
        express_validator_1.check("data.email")
            .not()
            .isEmpty()
            .withMessage("Email is Empty")
            .isEmail()
            .normalizeEmail()
            .withMessage("Email is invalid")
            .isLength({ min: 5 })
            .withMessage("Length less than 5 characters")
            .isLength({ max: 128 })
            .withMessage("Length more than 128 characters")
            .trim(),
        express_validator_1.check("data.fingerprint")
            .not()
            .isEmpty()
            .withMessage("fingerprint is Empty")
            .isLength({ min: 1, max: 128 })
            .withMessage("Length less than 3 characters or more then 128")
            .trim(),
        express_validator_1.check("data.password")
            .not()
            .isEmpty()
            .withMessage("Password is Empty")
            .isLength({ min: 1, max: 128 })
            .withMessage("Length less than 6 characters or more then 128")
            .trim(),
    ];
};
AuthRules.logoutRules = () => {
    return [
        express_validator_1.check("data.token")
            .not()
            .isEmpty()
            .withMessage("token is Empty")
            .isLength({ min: 6, max: 1280 })
            .withMessage("Length less than 3 characters or more then 1280")
            .trim(),
    ];
};
AuthRules.refreshRules = () => {
    return [
        express_validator_1.check("data.fingerprint")
            .not()
            .isEmpty()
            .withMessage("fingerprint is Empty")
            .isLength({ min: 6, max: 1280 })
            .withMessage("Length less than 6 characters or more then 1280")
            .trim(),
    ];
};
AuthRules.resetCheckRules = () => {
    return [
        express_validator_1.check("data.resetDate")
            .not()
            .isEmpty()
            .withMessage("resetDate is Empty")
            .isLength({ min: 6, max: 1280 })
            .withMessage("Length less than 6 characters or more then 1280")
            .trim(),
        express_validator_1.check("data.resetId")
            .not()
            .isEmpty()
            .withMessage("resetId is Empty")
            .isLength({ min: 6, max: 1280 })
            .withMessage("Length less than 6 characters or more then 1280")
            .trim(),
    ];
};
AuthRules.resetPasswordRules = () => {
    return [
        express_validator_1.check("data.resetDate")
            .not()
            .isEmpty()
            .withMessage("resetDate is Empty")
            .isLength({ min: 6, max: 1280 })
            .withMessage("Length less than 6 characters or more then 1280")
            .trim(),
        express_validator_1.check("data.resetId")
            .not()
            .isEmpty()
            .withMessage("resetId is Empty")
            .isLength({ min: 6, max: 1280 })
            .withMessage("Length less than 6 characters or more then 1280")
            .trim(),
        express_validator_1.check("data.password")
            .not()
            .isEmpty()
            .withMessage("Password is Empty")
            .isLength({ min: 8, max: 128 })
            .withMessage("Length less than 6 characters or more then 128")
            .trim(),
    ];
};
exports.default = AuthRules;
