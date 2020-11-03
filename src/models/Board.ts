import mongoose from "mongoose"

const Schema = mongoose.Schema

export interface ICard {
  title: string
  creator: string
  date: string
}


export interface IList {
  title: string
  date: string
  creator: string
  cards: ICard[]
}


export interface IBoard extends mongoose.Document {
  title: string
  creator: string
  date: string
  personal: boolean
  team: string | null
  list: IList[]
}

const boardSchema = new Schema({
  title: {type: String, required: true, unique: true, dropDups: true},
  creator: {type: Schema.Types.ObjectId, required: true, ref: "user"},
  personal: {type: Boolean, required: true},
  date: {type: String, required: true},
  team: {type: Schema.Types.ObjectId, ref: "team"},
  list: [{
    title: {type: String, required: true},
    date: {type: String, required: true},
    creator: {type: Schema.Types.ObjectId, required: true, ref: "user"},
    cards: [{
      title: {type: String, required: true},
      creator: {type: Schema.Types.ObjectId, required: true, ref: "user"},
      date: {type: String, required: true},
    }]
  }]
})

export default mongoose.model<IBoard>("board", boardSchema)
