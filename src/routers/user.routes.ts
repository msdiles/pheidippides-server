import { UserRules } from "./../validate/user.rules"
import express from "express"
import Router from "./Router"
import Validator from "../validate/validator"
import { TeamRules } from "../validate/team.rules"
import TeamControllerApi from "../controllers/team.controller.api"
import AuthControllerApi from "../controllers/auth.controller.api"
import UserControllerApi from "../controllers/user.controller.api"

class UserRouter extends Router {
  path = "/api/user"
  router = express.Router()

  constructor(middleware: any[]) {
    super(middleware)
    this.initRoute()
  }
  initRoute() {
    this.router.post(
      "/favorite",
      UserRules.setFavorite(),
      Validator.validate,
      AuthControllerApi.checkJWTMiddleware,
      UserControllerApi.setFavorite
    )
  }
}

export default UserRouter
