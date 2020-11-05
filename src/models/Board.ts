import mongoose from "mongoose"

const Schema = mongoose.Schema

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
  personal: boolean
  team: string | null
  lists: IList[]
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
  title: {type: String, required: true, unique: true, dropDups: true},
  creator: {type: Schema.Types.ObjectId, required: true, ref: "user"},
  personal: {type: Boolean, required: true},
  date: {type: String, required: true},
  team: {type: Schema.Types.ObjectId, ref: "team"},
  lists: [listSchema]
})

export default mongoose.model<IBoard>("board", boardSchema)
