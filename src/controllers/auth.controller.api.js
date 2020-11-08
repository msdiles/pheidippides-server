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
const auth_controller_1 = __importDefault(require("./auth.controller"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const HTTPExtensions_1 = require("../types/HTTPExtensions");
const saltRounds = 10;
class AuthControllerApi {
    static checkEmail(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body.data;
                const isUserExist = yield auth_controller_1.default.isUserExist(data.email);
                res.status(200).send({ isUserExist, data });
            }
            catch (e) {
                next(e);
            }
        });
    }
    static signUp(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, username, password } = req.body.data;
                const hashedPassword = yield bcrypt_1.default.hash(password, saltRounds);
                const isUserExist = yield auth_controller_1.default.isUserExist(email);
                if (isUserExist) {
                    res.status(200).send({
                        success: false,
                        message: "User with this email already exists",
                        target: email,
                    });
                }
                else {
                    const user = yield auth_controller_1.default.registerUser(username, email, hashedPassword);
                    res.status(200).send({
                        success: true,
                        message: "You have successfully registered",
                        target: email,
                    });
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static signIn(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password, fingerprint } = req.body.data;
                const { success, tokenData } = yield auth_controller_1.default.checkPassword(password, email);
                if (!success) {
                    throw new HTTPExtensions_1.HTTPException(401, "Invalid password or email");
                }
                const [accessToken, refreshToken] = yield Promise.all([
                    auth_controller_1.default.createAccessToken(tokenData),
                    auth_controller_1.default.createRefreshToken(tokenData, fingerprint),
                ]);
                res.status(200)
                    .cookie("refreshToken", refreshToken, {
                    maxAge: 1000 * 60 * 60 * 24 * 30,
                    httpOnly: true,
                    sameSite: "none",
                    secure: false
                })
                    .send({
                    user: Object.assign({}, tokenData),
                    accessToken: accessToken,
                    success: true,
                    message: "You have successfully signed in",
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
    static logOut(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { token } = req.body.data;
                yield auth_controller_1.default.deleteSession(token);
                res.cookie("refreshToken", "", { expires: new Date(Date.now()) });
                res.status(200).send({
                    success: true,
                    message: "You have been successfully logged out",
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
    static getUserInfo(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.status(200).send(req.body.user);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static checkJWTMiddleware(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const header = req.headers["authorization"];
                if (typeof header !== "undefined") {
                    const bearer = header.split(" ");
                    const token = bearer[1];
                    if (token) {
                        req.body.user = yield auth_controller_1.default.asyncVerify(token, process.env.ACCESS_SECRET_KEY);
                        next();
                    }
                }
                else {
                    res.status(401).send({
                        success: false,
                        error: "Token is invalid",
                    });
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static refreshTokens(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { fingerprint } = req.body.data;
                const token = req.cookies["refreshToken"];
                if (!token) {
                    res
                        .status(200)
                        .cookie("refreshToken", "", { expires: new Date(Date.now()) })
                        .send({ success: false });
                    return;
                }
                yield auth_controller_1.default.asyncVerify(token, process.env.REFRESH_SECRET_KEY);
                const [user, session] = yield auth_controller_1.default.getInfoAboutUserThroughToken(token);
                yield auth_controller_1.default.checkSessionIsValid(session, fingerprint);
                const tokenData = yield auth_controller_1.default.getTokenPayload(user);
                const [accessToken, refreshToken] = yield Promise.all([
                    auth_controller_1.default.createAccessToken(tokenData),
                    auth_controller_1.default.createRefreshToken(tokenData, fingerprint),
                ]);
                yield auth_controller_1.default.deleteSession(token);
                res.status(200)
                    .cookie("refreshToken", refreshToken, {
                    maxAge: 1000 * 60 * 60 * 24 * 30,
                    httpOnly: true,
                    sameSite: "none",
                    secure: false
                }).send({
                    user: Object.assign({}, tokenData),
                    accessToken: accessToken,
                    success: true,
                });
            }
            catch (e) {
                try {
                    res.cookie("refreshToken", "", { expires: new Date(Date.now()) });
                    yield auth_controller_1.default.deleteSession(req.body.data.token);
                    next(e);
                }
                catch (e) {
                    next(e);
                }
            }
        });
    }
    static getResetURL(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.body.data;
                const isUserExist = yield auth_controller_1.default.isUserExist(email);
                res.status(202).send({ isUserExist });
                if (isUserExist) {
                    yield auth_controller_1.default.createResetPasswordURL(email);
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static resetCheck(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { resetId, resetDate } = req.body.data;
                const isToken = yield auth_controller_1.default.checkResetToken(resetId, resetDate);
                if (isToken) {
                    res.status(200).send({ success: true });
                }
                else {
                    throw new HTTPExtensions_1.HTTPException(403, "Token not found");
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static resetPassword(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { resetId, resetDate, password } = req.body.data;
                const isToken = yield auth_controller_1.default.checkResetToken(resetId, resetDate);
                if (isToken) {
                    const hashedPassword = yield bcrypt_1.default.hash(password, saltRounds);
                    yield auth_controller_1.default.changePassword(resetId, resetDate, hashedPassword);
                    res.status(200).send({ success: true });
                }
                else {
                    throw new HTTPExtensions_1.HTTPException(403, "Token not found");
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.default = AuthControllerApi;
