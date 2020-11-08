"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const uuid_1 = require("uuid");
const HTTPExtensions_1 = require("../types/HTTPExtensions");
const User_1 = __importStar(require("../models/User"));
const Session_1 = __importDefault(require("../models/Session"));
const email_api_1 = __importDefault(require("../email/email.api"));
const resetToken_1 = __importDefault(require("../models/resetToken"));
class AuthController {
    static isUserExist(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.default.findOne({ email });
                return !!user;
            }
            catch (e) {
                throw new HTTPExtensions_1.HTTPException(500, "Database query error");
            }
        });
    }
    static registerUser(login, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.default.create({
                    username: login,
                    email,
                    password,
                    userRole: [User_1.roles.user],
                    favoriteBoards: []
                });
                return user;
            }
            catch (e) {
                throw new HTTPExtensions_1.HTTPException(500, "Something went wrong. User registration failed");
            }
        });
    }
    static checkPassword(password, email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.default.findOne({ email });
                if (!user) {
                    throw new HTTPExtensions_1.HTTPException(401, "Invalid password or email");
                }
                const [tokenData, success] = yield Promise.all([
                    this.getTokenPayload(user),
                    bcrypt_1.default.compare(password, user.password),
                ]);
                return { success, tokenData };
            }
            catch (e) {
                if (e instanceof HTTPExtensions_1.HTTPException) {
                    throw new HTTPExtensions_1.HTTPException(e.status, e.message);
                }
                else
                    throw new Error(e.message);
            }
        });
    }
    static createAccessToken(payload, time = "60m") {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.asyncSign({ user: payload }, process.env.ACCESS_SECRET_KEY, { expiresIn: time });
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    static createRefreshToken(payload, fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sessions = yield Session_1.default.find({ userId: payload.id });
                if (sessions.length >= 5) {
                    yield Session_1.default.deleteMany({ userId: payload.id });
                }
                const token = yield this.asyncSign({ user: payload }, process.env.REFRESH_SECRET_KEY, { expiresIn: "60d" });
                yield Session_1.default.create({
                    refreshToken: token,
                    fingerprint,
                    userId: payload.id,
                });
                return token;
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    static deleteSession(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Session_1.default.deleteOne({ refreshToken: token });
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    static asyncSign({ user }, secret, { expiresIn }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield jsonwebtoken_1.default.sign({ user: user }, secret, { expiresIn });
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    static asyncVerify(token, secret) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield jsonwebtoken_1.default.verify(token, secret);
            }
            catch (e) {
                if (e.message === "jwt expired") {
                    throw new HTTPExtensions_1.HTTPException(401, "Token expired", e);
                }
                else {
                    throw new HTTPExtensions_1.HTTPException(401, "Invalid token", e);
                }
            }
        });
    }
    static getInfoAboutUserThroughToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const session = yield Session_1.default.findOne({ refreshToken: token });
                if (!session) {
                    throw new HTTPExtensions_1.HTTPException(403, "Not found token");
                }
                const user = yield User_1.default.findOne({ _id: session.userId });
                if (!user) {
                    throw new HTTPExtensions_1.HTTPException(403, "Not found user");
                }
                return [user, session];
            }
            catch (e) {
                if (e instanceof HTTPExtensions_1.HTTPException) {
                    throw new HTTPExtensions_1.HTTPException(e.status, e.message);
                }
                else
                    throw new Error(e.message);
            }
        });
    }
    static checkSessionIsValid(session, fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (session.fingerprint === fingerprint) {
                    return yield true;
                }
                else {
                    throw new HTTPExtensions_1.HTTPException(403, "Invalid fingerprint");
                }
            }
            catch (e) {
                if (e instanceof HTTPExtensions_1.HTTPException) {
                    throw new HTTPExtensions_1.HTTPException(e.status, e.message);
                }
                else
                    throw new Error(e.message);
            }
        });
    }
    static getTokenPayload(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return {
                    id: userData._id,
                    name: userData.username,
                    role: userData.userRole,
                    email: userData.email,
                    favoriteBoards: userData.favoriteBoards
                };
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    static getInfoAboutUserThroughEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (yield User_1.default.findOne({ email }));
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    static createResetPasswordURL(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userData = yield this.getInfoAboutUserThroughEmail(email);
                const resetDate = new Date().getTime().toString();
                const resetId = yield uuid_1.v4();
                yield this.saveResetTokenToDatabase(userData.id, resetDate, resetId);
                const sender = new email_api_1.default(resetDate, resetId, email);
                yield sender.sendEmail();
            }
            catch (e) {
            }
        });
    }
    static saveResetTokenToDatabase(id, resetDate, resetId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield resetToken_1.default.deleteMany({ userId: id });
                yield resetToken_1.default.create({ userId: id, resetId, resetDate });
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    static checkResetToken(resetId, resetDate) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield resetToken_1.default.findOne({ resetId, resetDate });
                return !!result;
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    static changePassword(resetId, resetDate, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = (yield resetToken_1.default.findOne({
                    resetId,
                    resetDate,
                }));
                yield User_1.default.findByIdAndUpdate(user.userId, { password: password });
                yield resetToken_1.default.deleteOne({ resetId, resetDate });
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
}
exports.default = AuthController;
