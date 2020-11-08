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
const board_controller_1 = __importDefault(require("./board.controller"));
class BoardControllerApi {
    static getAllBoards(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId } = req.body.data;
                const boards = yield board_controller_1.default.getAllBoards(userId);
                if (boards) {
                    res.status(200).send({ success: true, target: boards });
                }
                else {
                    res.status(200).send({ success: false, target: userId });
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static getBoard(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body.data;
                const board = yield board_controller_1.default.getBoard(data.id);
                if (board) {
                    res.status(200).send({ success: true, target: board });
                }
                else {
                    res.status(200).send({ success: false, target: data });
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static createBoard(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body.data.board;
                const board = yield board_controller_1.default.createBoard(data);
                if (board) {
                    res.status(200).send({ success: true, target: board });
                }
                else {
                    res.status(200).send({ success: false, target: data });
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static changeBoard(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body.data.board;
                const board = yield board_controller_1.default.changeBoard(data);
                if (board) {
                    res.status(200).send({ success: true, target: board });
                }
                else {
                    res.status(200).send({ success: false, target: data });
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static deleteBoard(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body.data;
                const board = yield board_controller_1.default.deleteBoard(data.id);
                if (board) {
                    res.status(200).send({ success: true, target: data });
                }
                else {
                    res.status(200).send({ success: false, target: data });
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static getList(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { boardId, listId } = req.body.data;
                const list = yield board_controller_1.default.getList(boardId, listId);
                if (list) {
                    res.status(200).send({ success: true, target: { target: list, boardId, listId } });
                }
                else {
                    res.status(200).send({ success: false, target: { boardId, listId } });
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static createList(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { boardId, list } = req.body.data.list;
                const newList = yield board_controller_1.default.createList(boardId, list);
                if (newList) {
                    res.status(200).send({ success: true, target: { boardId, target: newList } });
                }
                else {
                    res.status(200).send({ success: false, target: { boardId, list } });
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static changeList(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { boardId, list } = req.body.data.list;
                const newList = yield board_controller_1.default.changeList(boardId, list);
                if (newList) {
                    res.status(200).send({ success: true, target: { target: newList, boardId } });
                }
                else {
                    res.status(200).send({ success: false, target: { boardId, list } });
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static deleteList(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { boardId, listId } = req.body.data;
                const list = yield board_controller_1.default.deleteList(boardId, listId);
                if (list) {
                    res.status(200).send({ success: true, target: { boardId, listId } });
                }
                else {
                    res.status(200).send({ success: false, target: { boardId, listId } });
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static getCard(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { boardId, cardId } = req.body.data;
                const card = yield board_controller_1.default.getCard(boardId, cardId);
                if (card) {
                    res.status(200).send({ success: true, target: { target: card, boardId, cardId } });
                }
                else {
                    res.status(200).send({ success: false, target: { boardId, cardId } });
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static createCard(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { boardId, card } = req.body.data.card;
                const newCard = yield board_controller_1.default.createCard(boardId, card);
                if (newCard) {
                    res.status(200).send({ success: true, target: { target: newCard, boardId } });
                }
                else {
                    res.status(200).send({ success: false, target: { boardId, card } });
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static changeCard(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { boardId, card } = req.body.data.card;
                const newCard = yield board_controller_1.default.changeCard(boardId, card);
                if (newCard) {
                    res.status(200).send({ success: true, target: { target: newCard, boardId } });
                }
                else {
                    res.status(200).send({ success: false, target: { boardId, card } });
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static deleteCard(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { boardId, cardId } = req.body.data;
                const card = yield board_controller_1.default.deleteCard(boardId, cardId);
                if (card) {
                    res.status(200).send({ success: true, target: { boardId, cardId } });
                }
                else {
                    res.status(200).send({ success: false, target: { boardId, cardId } });
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.default = BoardControllerApi;
