import {check} from "express-validator"

export class BoardRules{
  static getBoard=()=>{
    return [
      check("data.id")
        .not()
        .isEmpty()
        .withMessage("Id is Empty")
    ]
  }

  static getAllBoards=()=>{
    return [
      check("data.userId")
        .not()
        .isEmpty()
        .withMessage("UserId is Empty")
    ]
  }

  static createBoard=()=>{
    return [
      check("data.board.title")
        .not()
        .isEmpty()
        .withMessage("Title is Empty"),
      check("data.board.creator")
        .not()
        .isEmpty()
        .withMessage("Creator is Empty"),
      check("data.board.date")
        .not()
        .isEmpty()
        .withMessage("Date is Empty"),
      check("data.board.lists")
        .isArray()
        .withMessage("Lists is Empty")
    ]
  }

  static changeBoard=()=>{
    return [
      check("data.board.title")
        .not()
        .isEmpty()
        .withMessage("Title is Empty"),
      check("data.board.creator")
        .not()
        .isEmpty()
        .withMessage("Creator is Empty"),
      check("data.board.date")
        .not()
        .isEmpty()
        .withMessage("Date is Empty"),
      check("data.board.lists")
        .isArray()
        .withMessage("Lists is Empty")
    ]
  }

  static deleteBoard=()=>{
    return [
      check("data.id")
        .not()
        .isEmpty()
        .withMessage("Id is Empty")
    ]
  }

  static getList=()=>{
    return [
      check("data.boardId")
        .not()
        .isEmpty()
        .withMessage("BoardId is Empty"),
      check("data.listId")
        .not()
        .isEmpty()
        .withMessage("ListId is Empty")
    ]
  }

  static createList=()=>{
    return [
      check("data.list.boardId")
        .not()
        .isEmpty()
        .withMessage("BoardId is Empty"),
      check("data.list.title")
        .not()
        .isEmpty()
        .withMessage("Title is Empty"),
      check("data.list.creator")
        .not()
        .isEmpty()
        .withMessage("Creator is Empty"),
      check("data.list.date")
        .not()
        .isEmpty()
        .withMessage("Date is Empty"),
      check("data.list.cards")
        .isArray()
        .withMessage("Cards is Empty")
    ]
  }

  static changeList=()=>{
    return [
      check("data.boardId")
        .not()
        .isEmpty()
        .withMessage("BoardId is Empty"),
      check("data.list.title")
        .not()
        .isEmpty()
        .withMessage("Title is Empty"),
      check("data.list.creator")
        .not()
        .isEmpty()
        .withMessage("Creator is Empty"),
      check("data.list.date")
        .not()
        .isEmpty()
        .withMessage("Date is Empty"),
      check("data.list.cards")
        .isArray()
        .withMessage("Cards is Empty")
    ]
  }

  static deleteList=()=>{
    return [
      check("data.boardId")
        .not()
        .isEmpty()
        .withMessage("BoardId is Empty"),
      check("data.listId")
        .not()
        .isEmpty()
        .withMessage("ListId is Empty")
    ]
  }

  static getCard=()=>{
    return [
      check("data.boardId")
        .not()
        .isEmpty()
        .withMessage("BoardId is Empty"),
      check("data.cardId")
        .not()
        .isEmpty()
        .withMessage("CardId is Empty")
    ]
  }

  static createCard=()=>{
    return [
      check("data.boardId")
        .not()
        .isEmpty()
        .withMessage("BoardId is Empty"),
      check("data.card.title")
        .not()
        .isEmpty()
        .withMessage("Title is Empty"),
      check("data.card.creator")
        .not()
        .isEmpty()
        .withMessage("Creator is Empty"),
      check("data.card.date")
        .not()
        .isEmpty()
        .withMessage("Date is Empty"),
    ]
  }

  static changeCard=()=>{
    return [
      check("data.boardId")
        .not()
        .isEmpty()
        .withMessage("BoardId is Empty"),
      check("data.card.title")
        .not()
        .isEmpty()
        .withMessage("Title is Empty"),
      check("data.card.creator")
        .not()
        .isEmpty()
        .withMessage("Creator is Empty"),
      check("data.card.date")
        .not()
        .isEmpty()
        .withMessage("Date is Empty"),
    ]
  }

  static deleteCard=()=>{
    return [
      check("data.boardId")
        .not()
        .isEmpty()
        .withMessage("BoardId is Empty"),
      check("data.cardId")
        .not()
        .isEmpty()
        .withMessage("CardId is Empty")
    ]
  }
}
