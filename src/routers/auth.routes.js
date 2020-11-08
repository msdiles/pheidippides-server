"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Router_1 = __importDefault(require("./Router"));
const validator_1 = __importDefault(require("../validate/validator"));
const auth_rules_1 = __importDefault(require("../validate/auth.rules"));
const auth_controller_api_1 = __importDefault(require("../controllers/auth.controller.api"));
class AuthRouter extends Router_1.default {
    constructor(middleware) {
        super(middleware);
        this.path = "/api/auth";
        this.router = express_1.default.Router();
        this.initRoute();
    }
    initRoute() {
        this.router.post("/email-check", auth_rules_1.default.emailRules(), validator_1.default.validate, auth_controller_api_1.default.checkEmail);
        this.router.post("/signup", auth_rules_1.default.signupRules(), validator_1.default.validate, auth_controller_api_1.default.signUp);
        this.router.post("/signin", auth_rules_1.default.signinRules(), validator_1.default.validate, auth_controller_api_1.default.signIn);
        this.router.post("/logout", auth_rules_1.default.logoutRules(), validator_1.default.validate, auth_controller_api_1.default.logOut);
        this.router.post("/refresh", auth_rules_1.default.refreshRules(), validator_1.default.validate, auth_controller_api_1.default.refreshTokens);
        this.router.get("/refresh", auth_controller_api_1.default.checkJWTMiddleware, auth_controller_api_1.default.getUserInfo);
        this.router.post("/reset/get", auth_rules_1.default.emailRules(), validator_1.default.validate, auth_controller_api_1.default.getResetURL);
        this.router.post("/reset/check", auth_rules_1.default.resetCheckRules(), validator_1.default.validate, auth_controller_api_1.default.resetCheck);
        this.router.post("/reset/password", auth_rules_1.default.resetPasswordRules(), validator_1.default.validate, auth_controller_api_1.default.resetPassword);
    }
}
exports.default = AuthRouter;
