import mongoose from "mongoose"

const Schema = mongoose.Schema
export type TeamStatus = "Private" | "Public"

export interface ITeam extends mongoose.Document {
  title: string
  creator: string
  date:string
  description:string
  status:TeamStatus
  members: string[]
  boards: string[]
}

const teamSchema = new Schema({
  title: {type: String, required: true, unique: true, dropDups: true},
  creator: {type: Schema.Types.ObjectId, required: true, ref: "user"},
  date:{type:String,required:true},
  status:{type:String,required:true},
  description:{type:String},
  members: [{type: Schema.Types.ObjectId, ref: "user"}],
  boards: [{type: Schema.Types.ObjectId, ref: "board"}],
})

export default mongoose.model<ITeam>("team", teamSchema)
