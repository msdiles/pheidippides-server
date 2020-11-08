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
const Board_1 = __importDefault(require("../models/Board"));
class BoardController {
}
BoardController.getBoard = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield Board_1.default.findById(id); });
BoardController.getAllBoards = (userId) => __awaiter(void 0, void 0, void 0, function* () { return yield Board_1.default.find({ creator: userId }); });
BoardController.createBoard = (data) => __awaiter(void 0, void 0, void 0, function* () { return yield Board_1.default.create(Object.assign({}, data)); });
BoardController.changeBoard = (data) => __awaiter(void 0, void 0, void 0, function* () { return yield Board_1.default.findByIdAndUpdate(data._id, Object.assign({}, data)); });
BoardController.deleteBoard = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield Board_1.default.findByIdAndDelete(id); });
BoardController.getList = (boardId, listId) => __awaiter(void 0, void 0, void 0, function* () { return yield Board_1.default.findOne({ _id: boardId, "lists._id": listId }); });
BoardController.createList = (boardId, data) => __awaiter(void 0, void 0, void 0, function* () { return yield Board_1.default.update({ _id: boardId }, { $push: { lists: data } }); });
BoardController.changeList = (boardId, data) => __awaiter(void 0, void 0, void 0, function* () { return yield Board_1.default.update({ _id: boardId, "lists._id": data._id }, { $set: { "lists.$": data } }); });
BoardController.deleteList = (boardId, listId) => __awaiter(void 0, void 0, void 0, function* () { return yield Board_1.default.update({ _id: boardId }, { $pull: { lists: listId } }); });
BoardController.getCard = (boardId, cardId) => __awaiter(void 0, void 0, void 0, function* () { return yield Board_1.default.findOne({ _id: boardId, "lists.cards._id": cardId }); });
BoardController.createCard = (boardId, data) => __awaiter(void 0, void 0, void 0, function* () { return yield Board_1.default.update({ _id: boardId, "lists.cards._id": data._id }, { $push: { "lists.cards": data } }); });
BoardController.changeCard = (boardId, data) => __awaiter(void 0, void 0, void 0, function* () { return yield Board_1.default.update({ _id: boardId, "lists.cards._id": data._id }, { $set: { "lists.cards.$": data } }); });
BoardController.deleteCard = (boardId, cardId) => __awaiter(void 0, void 0, void 0, function* () { return yield Board_1.default.update({ _id: boardId, "lists.cards._id": cardId }, { $pull: { "lists.cards.$": cardId } }); });
exports.default = BoardController;
