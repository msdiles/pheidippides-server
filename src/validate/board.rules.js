"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardRules = void 0;
const express_validator_1 = require("express-validator");
class BoardRules {
}
exports.BoardRules = BoardRules;
BoardRules.getBoard = () => {
    return [
        express_validator_1.check("data.id")
            .not()
            .isEmpty()
            .withMessage("Id is Empty")
    ];
};
BoardRules.getAllBoards = () => {
    return [
        express_validator_1.check("data.userId")
            .not()
            .isEmpty()
            .withMessage("UserId is Empty")
    ];
};
BoardRules.createBoard = () => {
    return [
        express_validator_1.check("data.board.title")
            .not()
            .isEmpty()
            .withMessage("Title is Empty"),
        express_validator_1.check("data.board.creator")
            .not()
            .isEmpty()
            .withMessage("Creator is Empty"),
        express_validator_1.check("data.board.date")
            .not()
            .isEmpty()
            .withMessage("Date is Empty"),
        express_validator_1.check("data.board.lists")
            .isArray()
            .withMessage("Lists is Empty")
    ];
};
BoardRules.changeBoard = () => {
    return [
        express_validator_1.check("data.board.title")
            .not()
            .isEmpty()
            .withMessage("Title is Empty"),
        express_validator_1.check("data.board.creator")
            .not()
            .isEmpty()
            .withMessage("Creator is Empty"),
        express_validator_1.check("data.board.date")
            .not()
            .isEmpty()
            .withMessage("Date is Empty"),
        express_validator_1.check("data.board.lists")
            .isArray()
            .withMessage("Lists is Empty")
    ];
};
BoardRules.deleteBoard = () => {
    return [
        express_validator_1.check("data.id")
            .not()
            .isEmpty()
            .withMessage("Id is Empty")
    ];
};
BoardRules.getList = () => {
    return [
        express_validator_1.check("data.boardId")
            .not()
            .isEmpty()
            .withMessage("BoardId is Empty"),
        express_validator_1.check("data.listId")
            .not()
            .isEmpty()
            .withMessage("ListId is Empty")
    ];
};
BoardRules.createList = () => {
    return [
        express_validator_1.check("data.list.boardId")
            .not()
            .isEmpty()
            .withMessage("BoardId is Empty"),
        express_validator_1.check("data.list.title")
            .not()
            .isEmpty()
            .withMessage("Title is Empty"),
        express_validator_1.check("data.list.creator")
            .not()
            .isEmpty()
            .withMessage("Creator is Empty"),
        express_validator_1.check("data.list.date")
            .not()
            .isEmpty()
            .withMessage("Date is Empty"),
        express_validator_1.check("data.list.cards")
            .isArray()
            .withMessage("Cards is Empty")
    ];
};
BoardRules.changeList = () => {
    return [
        express_validator_1.check("data.boardId")
            .not()
            .isEmpty()
            .withMessage("BoardId is Empty"),
        express_validator_1.check("data.list.title")
            .not()
            .isEmpty()
            .withMessage("Title is Empty"),
        express_validator_1.check("data.list.creator")
            .not()
            .isEmpty()
            .withMessage("Creator is Empty"),
        express_validator_1.check("data.list.date")
            .not()
            .isEmpty()
            .withMessage("Date is Empty"),
        express_validator_1.check("data.list.cards")
            .isArray()
            .withMessage("Cards is Empty")
    ];
};
BoardRules.deleteList = () => {
    return [
        express_validator_1.check("data.boardId")
            .not()
            .isEmpty()
            .withMessage("BoardId is Empty"),
        express_validator_1.check("data.listId")
            .not()
            .isEmpty()
            .withMessage("ListId is Empty")
    ];
};
BoardRules.getCard = () => {
    return [
        express_validator_1.check("data.boardId")
            .not()
            .isEmpty()
            .withMessage("BoardId is Empty"),
        express_validator_1.check("data.cardId")
            .not()
            .isEmpty()
            .withMessage("CardId is Empty")
    ];
};
BoardRules.createCard = () => {
    return [
        express_validator_1.check("data.boardId")
            .not()
            .isEmpty()
            .withMessage("BoardId is Empty"),
        express_validator_1.check("data.card.title")
            .not()
            .isEmpty()
            .withMessage("Title is Empty"),
        express_validator_1.check("data.card.creator")
            .not()
            .isEmpty()
            .withMessage("Creator is Empty"),
        express_validator_1.check("data.card.date")
            .not()
            .isEmpty()
            .withMessage("Date is Empty"),
    ];
};
BoardRules.changeCard = () => {
    return [
        express_validator_1.check("data.boardId")
            .not()
            .isEmpty()
            .withMessage("BoardId is Empty"),
        express_validator_1.check("data.card.title")
            .not()
            .isEmpty()
            .withMessage("Title is Empty"),
        express_validator_1.check("data.card.creator")
            .not()
            .isEmpty()
            .withMessage("Creator is Empty"),
        express_validator_1.check("data.card.date")
            .not()
            .isEmpty()
            .withMessage("Date is Empty"),
    ];
};
BoardRules.deleteCard = () => {
    return [
        express_validator_1.check("data.boardId")
            .not()
            .isEmpty()
            .withMessage("BoardId is Empty"),
        express_validator_1.check("data.cardId")
            .not()
            .isEmpty()
            .withMessage("CardId is Empty")
    ];
};
