"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamRules = void 0;
const express_validator_1 = require("express-validator");
class TeamRules {
}
exports.TeamRules = TeamRules;
TeamRules.getTeam = () => {
    return [
        express_validator_1.check("data.id")
            .not()
            .isEmpty()
            .withMessage("Id is Empty")
    ];
};
TeamRules.getAllTeams = () => {
    return [
        express_validator_1.check("data.userId")
            .not()
            .isEmpty()
            .withMessage("UserId is Empty")
    ];
};
TeamRules.createTeam = () => {
    return [
        express_validator_1.check("data.team.title")
            .not()
            .isEmpty()
            .withMessage("Title is Empty"),
        express_validator_1.check("data.team.creator")
            .not()
            .isEmpty()
            .withMessage("Creator is Empty"),
        express_validator_1.check("data.team.date")
            .not()
            .isEmpty()
            .withMessage("Date is Empty"),
        express_validator_1.check("data.team.members")
            .isArray()
            .withMessage("Id is Empty"),
        express_validator_1.check("data.team.boards")
            .isArray()
            .withMessage("Id is Empty")
    ];
};
TeamRules.changeTeam = () => {
    return [
        express_validator_1.check("data.team._id")
            .not()
            .isEmpty()
            .withMessage("Id is Empty"),
        express_validator_1.check("data.team.title")
            .not()
            .isEmpty()
            .withMessage("Title is Empty"),
        express_validator_1.check("data.team.creator")
            .not()
            .isEmpty()
            .withMessage("Creator is Empty"),
        express_validator_1.check("data.team.date")
            .not()
            .isEmpty()
            .withMessage("Date is Empty"),
        express_validator_1.check("data.team.members")
            .isArray()
            .withMessage("Id is Empty"),
        express_validator_1.check("data.team.boards")
            .isArray()
            .withMessage("Id is Empty")
    ];
};
TeamRules.deleteTeam = () => {
    return [
        express_validator_1.check("data.id")
            .not()
            .isEmpty()
            .withMessage("Id is Empty")
    ];
};
