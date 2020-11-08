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
const team_controller_1 = __importDefault(require("./team.controller"));
class TeamControllerApi {
    static getTeam(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body.data;
                const team = yield team_controller_1.default.getTeam(data.id);
                if (team) {
                    res.status(200).send({ success: true, target: team });
                }
                else {
                    res.status(200).send({ success: false, target: data });
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static getAllTeams(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId } = req.body.data;
                const teams = yield team_controller_1.default.getAllTeams(userId);
                if (teams) {
                    res.status(200).send({ success: true, target: teams });
                }
                else {
                    res.status(200).send({ success: false, target: userId });
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static createTeam(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body.data.team;
                const team = yield team_controller_1.default.createTeam(data);
                if (team) {
                    res.status(200).send({ success: true, target: team });
                }
                else {
                    res.status(200).send({ success: false, target: data });
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static changeTeam(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body.data.team;
                const team = yield team_controller_1.default.changeTeam(data);
                if (team) {
                    res.status(200).send({ success: true, target: team });
                }
                else {
                    res.status(200).send({ success: false, target: data });
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static deleteTeam(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body.data;
                const team = yield team_controller_1.default.deleteTeam(data.id);
                if (team) {
                    res.status(200).send({ success: true, target: team });
                }
                else {
                    res.status(200).send({ success: false, target: data });
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.default = TeamControllerApi;
