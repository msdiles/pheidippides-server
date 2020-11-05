import express from "express"
import Router from "./Router"
import Validator from "../validate/validator"
import AuthControllerApi from "../controllers/auth.controller.api"
import {BoardRules} from "../validate/board.rules"
import BoardControllerApi from "../controllers/board.controller.api"

class BoardRouter extends Router {
  path = "/api"
  router = express.Router()

  constructor(middleware: any[]) {
    super(middleware)
    this.initRoute()
  }

  initRoute() {
    this.router.post(
      "/board/get",
      BoardRules.getBoard(),
      Validator.validate,
      AuthControllerApi.checkJWTMiddleware,
      BoardControllerApi.getBoard
    )
    this.router.post(
      "/board/delete",
      BoardRules.deleteBoard(),
      Validator.validate,
      AuthControllerApi.checkJWTMiddleware,
      BoardControllerApi.deleteBoard
    )
    this.router.post(
      "/board/change",
      BoardRules.changeBoard(),
      Validator.validate,
      AuthControllerApi.checkJWTMiddleware,
      BoardControllerApi.changeBoard
    )
    this.router.post(
      "/board/create",
      BoardRules.createBoard(),
      Validator.validate,
      AuthControllerApi.checkJWTMiddleware,
      BoardControllerApi.createBoard
    )
    this.router.post(
      "/list/get",
      BoardRules.getList(),
      Validator.validate,
      AuthControllerApi.checkJWTMiddleware,
      BoardControllerApi.getList
    )
    this.router.post(
      "/list/delete",
      BoardRules.deleteList(),
      Validator.validate,
      AuthControllerApi.checkJWTMiddleware,
      BoardControllerApi.deleteList
    )
    this.router.post(
      "/list/change",
      BoardRules.changeList(),
      Validator.validate,
      AuthControllerApi.checkJWTMiddleware,
      BoardControllerApi.changeList
    )
    this.router.post(
      "/list/create",
      BoardRules.createList(),
      Validator.validate,
      AuthControllerApi.checkJWTMiddleware,
      BoardControllerApi.createList
    )
    this.router.post(
      "/card/get",
      BoardRules.getCard(),
      Validator.validate,
      AuthControllerApi.checkJWTMiddleware,
      BoardControllerApi.getCard
    )
    this.router.post(
      "/card/delete",
      BoardRules.deleteCard(),
      Validator.validate,
      AuthControllerApi.checkJWTMiddleware,
      BoardControllerApi.deleteCard
    )
    this.router.post(
      "/card/change",
      BoardRules.changeCard(),
      Validator.validate,
      AuthControllerApi.checkJWTMiddleware,
      BoardControllerApi.changeCard
    )
    this.router.post(
      "/card/create",
      BoardRules.createCard(),
      Validator.validate,
      AuthControllerApi.checkJWTMiddleware,
      BoardControllerApi.createCard
    )
  }
}

export default BoardRouter
