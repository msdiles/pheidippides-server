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

  static getAllTeams=()=>{
    return [
      check("data.userId")
        .not()
        .isEmpty()
        .withMessage("UserId is Empty")
    ]
  }

  static createTeam=()=>{
    return [
      check("data.team.title")
        .not()
        .isEmpty()
        .withMessage("Title is Empty"),
      check("data.team.creator")
        .not()
        .isEmpty()
        .withMessage("Creator is Empty"),
      check("data.team.date")
        .not()
        .isEmpty()
        .withMessage("Date is Empty"),
      check("data.team.members")
        .isArray()
        .withMessage("Id is Empty"),
      check("data.team.boards")
        .isArray()
        .withMessage("Id is Empty")
    ]
  }

  static changeTeam=()=>{
    return [
      check("data.team._id")
        .not()
        .isEmpty()
        .withMessage("Id is Empty"),
      check("data.team.title")
        .not()
        .isEmpty()
        .withMessage("Title is Empty"),
      check("data.team.creator")
        .not()
        .isEmpty()
        .withMessage("Creator is Empty"),
      check("data.team.date")
        .not()
        .isEmpty()
        .withMessage("Date is Empty"),
      check("data.team.members")
        .isArray()
        .withMessage("Id is Empty"),
      check("data.team.boards")
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
