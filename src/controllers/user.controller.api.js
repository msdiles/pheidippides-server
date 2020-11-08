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
const user_controller_1 = __importDefault(require("./user.controller"));
class UserControllerApi {
    static setFavorite(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body.data;
                console.log(data.userId, data.favorite);
                const favorite = yield user_controller_1.default.setFavorite(data.userId, data.favorite);
                if (favorite) {
                    res.status(200).send({ success: true, target: data.favorite });
                }
                else {
                    res.status(200).send({ success: false, target: data.favorite });
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.default = UserControllerApi;
