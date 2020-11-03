import {check} from "express-validator"

export class TeamRules{
  static getTeam=()=>{
    return [
      check("data.id")
        .not()
        .isEmpty()
        .withMessage("Id is Empty")
    ]
  }

  static createTeam=()=>{
    return [
      check("data.title")
        .not()
        .isEmpty()
        .withMessage("Title is Empty"),
      check("data.creator")
        .not()
        .isEmpty()
        .withMessage("Creator is Empty"),
      check("data.date")
        .not()
        .isEmpty()
        .withMessage("Date is Empty"),
      check("data.members")
        .isArray()
        .withMessage("Id is Empty"),
      check("data.boards")
        .isArray()
        .withMessage("Id is Empty")
    ]
  }

  static changeTeam=()=>{
    return [
      check("data._id")
        .not()
        .isEmpty()
        .withMessage("Id is Empty"),
      check("data.title")
        .not()
        .isEmpty()
        .withMessage("Title is Empty"),
      check("data.creator")
        .not()
        .isEmpty()
        .withMessage("Creator is Empty"),
      check("data.date")
        .not()
        .isEmpty()
        .withMessage("Date is Empty"),
      check("data.members")
        .isArray()
        .withMessage("Id is Empty"),
      check("data.boards")
        .isArray()
        .withMessage("Id is Empty")
    ]
  }

  static deleteTeam=()=>{
    return [
      check("data.id")
        .not()
        .isEmpty()
        .withMessage("Id is Empty")
    ]
  }
}
