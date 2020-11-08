import {Response} from "express"
import {Request} from "express"
import {NextFunction} from "express"
import UserController from "./user.controller"

class UserControllerApi {
  static async setFavorite(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body.data
      console.log(data.userId, data.favorite)
      const favorite = await UserController.setFavorite(data.userId, data.favorite)
      if (favorite) {
        res.status(200).send({success: true, target: data.favorite})
      } else {
        res.status(200).send({success: false, target: data.favorite})
      }
    } catch (e) {
      next(e)
    }
  }
}

export default UserControllerApi
