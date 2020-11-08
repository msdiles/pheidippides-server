"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRules = void 0;
const express_validator_1 = require("express-validator");
class UserRules {
}
exports.UserRules = UserRules;
UserRules.setFavorite = () => {
    return [
        express_validator_1.check("data.userId")
            .not()
            .isEmpty()
            .withMessage("UserId is Empty"),
        express_validator_1.check("data.favorite")
            .isArray()
            .withMessage("Favorite is Empty")
    ];
};
exports.default = UserRules;
