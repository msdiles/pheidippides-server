import express from "express"
import compression from "compression"
import helmet from "helmet"
import logger from "morgan"
import cors from "cors"
import App from "./app"
import mongoConnect from "./utils/mongoConnect"
import AuthRouter from "./routers/auth.routes"
import cookieParser from "cookie-parser"
import SocketHandler from "./socket/SocketHandler"
import TeamRouter from "./routers/team.routes"

const app = new App({
  port: 3444,
  middlewares: [
    cors({
      credentials: true,
      origin: process.env.CLIENT_URL,
    }),
    compression(),
    helmet(),
    logger("dev"),
    cookieParser(),
    express.json(),
    express.urlencoded({extended: true}),
  ],
  routers: [new AuthRouter([]),new TeamRouter([])],
  socketHandler:SocketHandler
})

mongoConnect()
  .then(() => app.listen())
  .catch((e) => console.log(e))

export default app
