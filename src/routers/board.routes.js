"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Router_1 = __importDefault(require("./Router"));
const validator_1 = __importDefault(require("../validate/validator"));
const auth_controller_api_1 = __importDefault(require("../controllers/auth.controller.api"));
const board_rules_1 = require("../validate/board.rules");
const board_controller_api_1 = __importDefault(require("../controllers/board.controller.api"));
class BoardRouter extends Router_1.default {
    constructor(middleware) {
        super(middleware);
        this.path = "/api";
        this.router = express_1.default.Router();
        this.initRoute();
    }
    initRoute() {
        this.router.post("/board/all", board_rules_1.BoardRules.getAllBoards(), validator_1.default.validate, auth_controller_api_1.default.checkJWTMiddleware, board_controller_api_1.default.getAllBoards);
        this.router.post("/board/get", board_rules_1.BoardRules.getBoard(), validator_1.default.validate, auth_controller_api_1.default.checkJWTMiddleware, board_controller_api_1.default.getBoard);
        this.router.post("/board/delete", board_rules_1.BoardRules.deleteBoard(), validator_1.default.validate, auth_controller_api_1.default.checkJWTMiddleware, board_controller_api_1.default.deleteBoard);
        this.router.post("/board/change", board_rules_1.BoardRules.changeBoard(), validator_1.default.validate, auth_controller_api_1.default.checkJWTMiddleware, board_controller_api_1.default.changeBoard);
        this.router.post("/board/create", board_rules_1.BoardRules.createBoard(), validator_1.default.validate, auth_controller_api_1.default.checkJWTMiddleware, board_controller_api_1.default.createBoard);
        this.router.post("/list/get", board_rules_1.BoardRules.getList(), validator_1.default.validate, auth_controller_api_1.default.checkJWTMiddleware, board_controller_api_1.default.getList);
        this.router.post("/list/delete", board_rules_1.BoardRules.deleteList(), validator_1.default.validate, auth_controller_api_1.default.checkJWTMiddleware, board_controller_api_1.default.deleteList);
        this.router.post("/list/change", board_rules_1.BoardRules.changeList(), validator_1.default.validate, auth_controller_api_1.default.checkJWTMiddleware, board_controller_api_1.default.changeList);
        this.router.post("/list/create", board_rules_1.BoardRules.createList(), validator_1.default.validate, auth_controller_api_1.default.checkJWTMiddleware, board_controller_api_1.default.createList);
        this.router.post("/card/get", board_rules_1.BoardRules.getCard(), validator_1.default.validate, auth_controller_api_1.default.checkJWTMiddleware, board_controller_api_1.default.getCard);
        this.router.post("/card/delete", board_rules_1.BoardRules.deleteCard(), validator_1.default.validate, auth_controller_api_1.default.checkJWTMiddleware, board_controller_api_1.default.deleteCard);
        this.router.post("/card/change", board_rules_1.BoardRules.changeCard(), validator_1.default.validate, auth_controller_api_1.default.checkJWTMiddleware, board_controller_api_1.default.changeCard);
        this.router.post("/card/create", board_rules_1.BoardRules.createCard(), validator_1.default.validate, auth_controller_api_1.default.checkJWTMiddleware, board_controller_api_1.default.createCard);
    }
}
exports.default = BoardRouter;
