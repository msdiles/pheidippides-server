import {check} from "express-validator"

export class UserRules{
  static setFavorite=()=>{
    return [
      check("data.userId")
        .not()
        .isEmpty()
        .withMessage("UserId is Empty"),
      check("data.favorite")
        .isArray()
        .withMessage("Favorite is Empty")
    ]
  }

}

export default UserRules
