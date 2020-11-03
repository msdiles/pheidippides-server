import mongoose from "mongoose"

const Schema = mongoose.Schema

export interface ITeam extends mongoose.Document {
  title: string
  creator: string
  date:string
  members: string[]
  boards: string[]
}

const teamSchema = new Schema({
  title: {type: String, required: true, unique: true, dropDups: true},
  creator: {type: Schema.Types.ObjectId, required: true, ref: "user"},
  date:{type:String,required:true},
  members: [{type: Schema.Types.ObjectId, ref: "user"}],
  boards: [{type: Schema.Types.ObjectId, ref: "board"}]
})

export default mongoose.model<ITeam>("team", teamSchema)
