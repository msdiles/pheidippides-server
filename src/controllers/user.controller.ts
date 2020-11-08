import User, {IUser} from "./../models/User"

class UserController {
  static setFavorite = async (userId: string, favorite: string[]) =>
    User.findByIdAndUpdate(userId,  {favoriteBoards: favorite})
}

export default UserController
