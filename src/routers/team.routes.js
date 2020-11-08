"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Router_1 = __importDefault(require("./Router"));
const validator_1 = __importDefault(require("../validate/validator"));
const team_rules_1 = require("../validate/team.rules");
const team_controller_api_1 = __importDefault(require("../controllers/team.controller.api"));
const auth_controller_api_1 = __importDefault(require("../controllers/auth.controller.api"));
class TeamRouter extends Router_1.default {
    constructor(middleware) {
        super(middleware);
        this.path = "/api/team";
        this.router = express_1.default.Router();
        this.initRoute();
    }
    initRoute() {
        this.router.post("/get", team_rules_1.TeamRules.getTeam(), validator_1.default.validate, auth_controller_api_1.default.checkJWTMiddleware, team_controller_api_1.default.getTeam);
        this.router.post("/all", team_rules_1.TeamRules.getAllTeams(), validator_1.default.validate, auth_controller_api_1.default.checkJWTMiddleware, team_controller_api_1.default.getAllTeams);
        this.router.post("/delete", team_rules_1.TeamRules.deleteTeam(), validator_1.default.validate, auth_controller_api_1.default.checkJWTMiddleware, team_controller_api_1.default.deleteTeam);
        this.router.post("/change", team_rules_1.TeamRules.changeTeam(), validator_1.default.validate, auth_controller_api_1.default.checkJWTMiddleware, team_controller_api_1.default.changeTeam);
        this.router.post("/create", team_rules_1.TeamRules.createTeam(), validator_1.default.validate, auth_controller_api_1.default.checkJWTMiddleware, team_controller_api_1.default.createTeam);
    }
}
exports.default = TeamRouter;
