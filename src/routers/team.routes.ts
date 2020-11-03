import express from "express"
import Router from "./Router"
import Validator from "../validate/validator"
import {TeamRules} from "../validate/team.rules"
import TeamControllerApi from "../controllers/team.controller.api"
import AuthControllerApi from "../controllers/auth.controller.api"

class TeamRouter extends Router {
  path = "/api/team"
  router = express.Router()

  constructor(middleware: any[]) {
    super(middleware)
    this.initRoute()
  }
  initRoute() {
    this.router.post(
      "/get",
      TeamRules.getTeam(),
      Validator.validate,
      AuthControllerApi.checkJWTMiddleware,
      TeamControllerApi.getTeam
    )
    this.router.post(
      "/delete",
      TeamRules.deleteTeam(),
      Validator.validate,
      AuthControllerApi.checkJWTMiddleware,
      TeamControllerApi.deleteTeam
    )
    this.router.post(
      "/change",
      TeamRules.changeTeam(),
      Validator.validate,
      AuthControllerApi.checkJWTMiddleware,
      TeamControllerApi.changeTeam
    )
    this.router.post(
      "/create",
      TeamRules.createTeam(),
      Validator.validate,
      AuthControllerApi.checkJWTMiddleware,
      TeamControllerApi.createTeam
    )
  }
}

export default TeamRouter
