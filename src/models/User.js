"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roles = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
var roles;
(function (roles) {
    roles["user"] = "user";
    roles["moderator"] = "moderator";
    roles["admin"] = "admin";
    roles["superadmin"] = "superadmin";
})(roles = exports.roles || (exports.roles = {}));
const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true, dropDups: true },
    password: { type: String, required: true },
    userRole: [String],
    favoriteBoards: [{ type: Schema.Types.ObjectId, ref: "board" }]
});
exports.default = mongoose_1.default.model("user", userSchema);
