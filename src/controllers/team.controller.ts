import Team, {ITeam} from "../models/Team"

class TeamController {
  static getTeam = async (id: string): Promise<ITeam | null> => await Team.findById(id)
  static createTeam = async (data: ITeam): Promise<ITeam> => await Team.create({...data})
  static changeTeam = async (data: ITeam): Promise<ITeam | null> => await Team.findByIdAndUpdate(data._id, {...data})
  static deleteTeam = async (id: string): Promise<ITeam | null> => await Team.findByIdAndDelete(id)
}

export default TeamController
