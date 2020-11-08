"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const teamSchema = new Schema({
    title: { type: String, required: true, unique: true, dropDups: true },
    creator: { type: Schema.Types.ObjectId, required: true, ref: "user" },
    date: { type: String, required: true },
    status: { type: String, required: true },
    description: { type: String },
    members: [{ type: Schema.Types.ObjectId, ref: "user" }],
    boards: [{ type: Schema.Types.ObjectId, ref: "board" }],
});
exports.default = mongoose_1.default.model("team", teamSchema);
