import {NextFunction, Request, Response} from "express"
import BoardController from "./board.controller"

class BoardControllerApi {
  static async getAllBoards(
    req: Request,
    res: Response,
    next: NextFunction) {
    try {
      const {userId} = req.body.data
      const boards = await BoardController.getAllBoards(userId)
      if (boards) {
        res.status(200).send({success: true, target: boards})
      } else {
        res.status(200).send({success: false, target: userId})
      }
    } catch (e) {
      next(e)
    }
  }

  static async getBoard(
    req: Request,
    res: Response,
    next: NextFunction) {
    try {
      const data = req.body.data
      const board = await BoardController.getBoard(data.id)
      if (board) {
        res.status(200).send({success: true, target: board})
      } else {
        res.status(200).send({success: false, target: data})
      }
    } catch (e) {
      next(e)
    }
  }

  static async createBoard(
    req: Request,
    res: Response,
    next: NextFunction) {
    try {
      const data = req.body.data.board
      const board = await BoardController.createBoard(data)
      if (board) {
        res.status(200).send({success: true, target: board})
      } else {
        res.status(200).send({success: false, target: data})
      }
    } catch (e) {
      next(e)
    }
  }

  static async changeBoard(
    req: Request,
    res: Response,
    next: NextFunction) {
    try {
      const data = req.body.data.board
      const board = await BoardController.changeBoard(data)
      if (board) {
        res.status(200).send({success: true, target: data})
      } else {
        res.status(200).send({success: false, target: data})
      }
    } catch (e) {
      next(e)
    }
  }

  static async deleteBoard(
    req: Request,
    res: Response,
    next: NextFunction) {
    try {
      const data = req.body.data
      const board = await BoardController.deleteBoard(data.id)
      if (board) {
        res.status(200).send({success: true, target: data})
      } else {
        res.status(200).send({success: false, target: data})
      }
    } catch (e) {
      next(e)
    }
  }

  static async getList(
    req: Request,
    res: Response,
    next: NextFunction) {
    try {
      const {boardId, listId} = req.body.data
      const list = await BoardController.getList(boardId, listId)
      if (list) {
        res.status(200).send({success: true, target: {target:list,boardId, listId}})
      } else {
        res.status(200).send({success: false, target: {boardId, listId}})
      }
    } catch (e) {
      next(e)
    }
  }

  static async createList(
    req: Request,
    res: Response,
    next: NextFunction) {
    try {
      const {boardId, list} = req.body.data.list
      const newList = await BoardController.createList(boardId, list)
      if (newList) {
        res.status(200).send({success: true, target: {boardId, target:newList}})
      } else {
        res.status(200).send({success: false, target: {boardId, list}})
      }
    } catch (e) {
      next(e)
    }
  }

  static async changeList(
    req: Request,
    res: Response,
    next: NextFunction) {
    try {
      const {boardId, list} = req.body.data.list
      const newList = await BoardController.changeList(boardId, list)
      if (newList) {
        res.status(200).send({success: true, target: {target:newList,boardId}})
      } else {
        res.status(200).send({success: false, target: {boardId, list}})
      }
    } catch (e) {
      next(e)
    }
  }

  static async deleteList(
    req: Request,
    res: Response,
    next: NextFunction) {
    try {
      const {boardId, listId} = req.body.data
      const list = await BoardController.deleteList(boardId, listId)
      if (list) {
        res.status(200).send({success: true, target: {boardId, listId}})
      } else {
        res.status(200).send({success: false, target: {boardId, listId}})
      }
    } catch (e) {
      next(e)
    }
  }

  static async getCard(
    req: Request,
    res: Response,
    next: NextFunction) {
    try {
      const {boardId, cardId} = req.body.data
      const card = await BoardController.getCard(boardId, cardId)
      if (card) {
        res.status(200).send({success: true, target: {target:card,boardId, cardId}})
      } else {
        res.status(200).send({success: false, target: {boardId, cardId}})
      }
    } catch (e) {
      next(e)
    }
  }

  static async createCard(
    req: Request,
    res: Response,
    next: NextFunction) {
    try {
      const {boardId, card} = req.body.data.card
      const newCard = await BoardController.createCard(boardId, card)
      if (newCard) {
        res.status(200).send({success: true, target: {target:newCard,boardId}})
      } else {
        res.status(200).send({success: false, target: {boardId, card}})
      }
    } catch (e) {
      next(e)
    }
  }

  static async changeCard(
    req: Request,
    res: Response,
    next: NextFunction) {
    try {
      const {boardId, card} = req.body.data.card
      const newCard = await BoardController.changeCard(boardId, card)
      if (newCard) {
        res.status(200).send({success: true, target: {target:newCard,boardId}})
      } else {
        res.status(200).send({success: false, target: {boardId, card}})
      }
    } catch (e) {
      next(e)
    }
  }

  static async deleteCard(
    req: Request,
    res: Response,
    next: NextFunction) {
    try {
      const {boardId, cardId} = req.body.data
      const card = await BoardController.deleteCard(boardId, cardId)
      if (card) {
        res.status(200).send({success: true, target: {boardId, cardId}})
      } else {
        res.status(200).send({success: false, target: {boardId, cardId}})
      }
    } catch (e) {
      next(e)
    }
  }
}

export default BoardControllerApi
