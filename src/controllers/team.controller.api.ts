import {NextFunction, Request, Response} from "express"
import TeamController from "./team.controller"

class TeamControllerApi {
  static async getTeam(
    req: Request,
    res: Response,
    next: NextFunction) {
    try {
      const data = req.body.data
      const team = await TeamController.getTeam(data.id)
      if (team) {
        res.status(200).send({success: true, target: team})
      } else {
        res.status(200).send({success: false, target: data})
      }
    } catch (e) {
      next(e)
    }
  }

  static async getAllTeams(
    req: Request,
    res: Response,
    next: NextFunction) {
    try {
      const {userId} = req.body.data
      const teams = await TeamController.getAllTeams(userId)
      if (teams) {
        res.status(200).send({success: true, target: teams})
      } else {
        res.status(200).send({success: false, target: userId})
      }
    } catch (e) {
      next(e)
    }
  }

  static async createTeam(
    req: Request,
    res: Response,
    next: NextFunction) {
    try {
      const data = req.body.data.team
      const team = await TeamController.createTeam(data)
      if (team) {
        res.status(200).send({success: true, target: team})
      } else {
        res.status(200).send({success: false, target: data})
      }
    } catch (e) {
      next(e)
    }
  }

  static async changeTeam(
    req: Request,
    res: Response,
    next: NextFunction) {
    try {
      const data = req.body.data.team
      const team = await TeamController.changeTeam(data)
      if (team) {
        res.status(200).send({success: true, target: team})
      } else {
        res.status(200).send({success: false, target: data})
      }
    } catch (e) {
      next(e)
    }
  }

  static async deleteTeam(
    req: Request,
    res: Response,
    next: NextFunction) {
    try {
      const data = req.body.data
      const team = await TeamController.deleteTeam(data.id)
      if (team) {
        res.status(200).send({success: true, target: team})
      } else {
        res.status(200).send({success: false, target: data})
      }
    } catch (e) {
      next(e)
    }
  }

}

export default TeamControllerApi
