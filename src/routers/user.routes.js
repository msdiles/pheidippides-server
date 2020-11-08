"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_rules_1 = require("./../validate/user.rules");
const express_1 = __importDefault(require("express"));
const Router_1 = __importDefault(require("./Router"));
const validator_1 = __importDefault(require("../validate/validator"));
const auth_controller_api_1 = __importDefault(require("../controllers/auth.controller.api"));
const user_controller_api_1 = __importDefault(require("../controllers/user.controller.api"));
class UserRouter extends Router_1.default {
    constructor(middleware) {
        super(middleware);
        this.path = "/api/user";
        this.router = express_1.default.Router();
        this.initRoute();
    }
    initRoute() {
        this.router.post("/favorite", user_rules_1.UserRules.setFavorite(), validator_1.default.validate, auth_controller_api_1.default.checkJWTMiddleware, user_controller_api_1.default.setFavorite);
    }
}
exports.default = UserRouter;
