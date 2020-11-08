import Team, {ITeam} from "../models/Team"

class TeamController {
  static getTeam = async (id: string): Promise<ITeam | null> => await Team.findById(id).populate("members", ["email", "_id", "username"], "user")
  static getAllTeams = async (userId: string): Promise<ITeam[] | null> => await Team.find({creator: userId}).populate("members", ["email", "_id", "username"], "user")
  static createTeam = async (data: ITeam): Promise<ITeam> => await Team.create({...data})
  static changeTeam = async (data: ITeam): Promise<ITeam | null> => await Team.findByIdAndUpdate(data._id, {...data})
  static deleteTeam = async (id: string): Promise<ITeam | null> => await Team.findByIdAndDelete(id)
}

export default TeamController
