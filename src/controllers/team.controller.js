"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Team_1 = __importDefault(require("../models/Team"));
class TeamController {
}
TeamController.getTeam = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield Team_1.default.findById(id).populate("members", ["email", "_id", "username"], "user"); });
TeamController.getAllTeams = (userId) => __awaiter(void 0, void 0, void 0, function* () { return yield Team_1.default.find({ creator: userId }).populate("members", ["email", "_id", "username"], "user"); });
TeamController.createTeam = (data) => __awaiter(void 0, void 0, void 0, function* () { return yield Team_1.default.create(Object.assign({}, data)); });
TeamController.changeTeam = (data) => __awaiter(void 0, void 0, void 0, function* () { return yield Team_1.default.findByIdAndUpdate(data._id, Object.assign({}, data)); });
TeamController.deleteTeam = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield Team_1.default.findByIdAndDelete(id); });
exports.default = TeamController;
