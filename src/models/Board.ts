import mongoose from "mongoose"

const Schema = mongoose.Schema

export type BoardStatus = "Private" | "Team" | "Public"
export type color =
  | "blue"
  | "orange"
  | "green"
  | "red"
  | "purple"
  | "pink"
  | "lime"
  | "sky"
  | "grey"

export interface ICard extends mongoose.Document {
  // _id:string
  title: string
  creator: string
  date: string
}


export interface IList extends mongoose.Document {
  // _id:string
  title: string
  date: string
  creator: string
  cards: ICard[]
}


export interface IBoard extends mongoose.Document {
  title: string
  creator: string
  date: string
  status:BoardStatus
  team: string | null
  lists: IList[]
  color:color
}

const cardSchema = new Schema({
  // _id:{type:Schema.Types.ObjectId},
  title: {type: String, required: true},
  creator: {type: Schema.Types.ObjectId, required: true, ref: "user"},
  date: {type: String, required: true},
})

const listSchema = new Schema({
  // _id:{type:Schema.Types.ObjectId},
  title: {type: String, required: true},
  date: {type: String, required: true},
  creator: {type: Schema.Types.ObjectId, required: true, ref: "user"},
  cards: [cardSchema]
})

const boardSchema = new Schema({
  title: {type: String, required: true},
  creator: {type: Schema.Types.ObjectId, required: true, ref: "user"},
  status: {type: String, required: true},
  date: {type: String, required: true},
  team: {type: Schema.Types.ObjectId, ref: "team"},
  lists: [listSchema],  
  color:{type: String, required: true},
})

export default mongoose.model<IBoard>("board", boardSchema)
