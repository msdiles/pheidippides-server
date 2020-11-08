"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const cardSchema = new Schema({
    // _id:{type:Schema.Types.ObjectId},
    title: { type: String, required: true },
    creator: { type: Schema.Types.ObjectId, required: true, ref: "user" },
    date: { type: String, required: true },
});
const listSchema = new Schema({
    // _id:{type:Schema.Types.ObjectId},
    title: { type: String, required: true },
    date: { type: String, required: true },
    creator: { type: Schema.Types.ObjectId, required: true, ref: "user" },
    cards: [cardSchema]
});
const boardSchema = new Schema({
    title: { type: String, required: true },
    creator: { type: Schema.Types.ObjectId, required: true, ref: "user" },
    status: { type: String, required: true },
    date: { type: String, required: true },
    team: { type: Schema.Types.ObjectId, ref: "team" },
    lists: [listSchema],
    color: { type: String, required: true },
});
exports.default = mongoose_1.default.model("board", boardSchema);
