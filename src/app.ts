import express, {Application} from "express"
import {errorMiddleware} from "./middlewares/errorMiddleware"
import {Socket} from "socket.io"
import SocketHandler from "./socket/SocketHandler"

class App {
  public app: Application
  public port: number
  public http: Application
  public io: Socket

  constructor(appInit: { port: number, middlewares: any, routers: any,socketHandler:typeof SocketHandler }) {
    this.app = express()
    this.http = require("http").Server(this.app)
    this.port = appInit.port
    this.io = require("socket.io")(this.http)

    this.middlewares(appInit.middlewares)
    this.routers(appInit.routers)
    this.socketHandler(appInit.socketHandler)
    this.errorHandler()
  }

  private middlewares(middlewares: any[]) {
    middlewares.forEach((middleware) => {
      this.app.use(middleware)
    })
  }

  private routers(routers: any[]) {
    routers.forEach((router) => {
      this.app.use(router.path, ...router.middlewares, router.router)
    })
  }

  private socketHandler(Handler: typeof SocketHandler) {
    new Handler(this.io)
  }

  private errorHandler() {
    this.app.use(errorMiddleware)
  }

  public listen() {
    if (process.env.NODE_ENV !== "test")
      this.http.listen(this.port, () => {
        console.log(
          `⚡️[server]:Server is running at http://localhost:${this.port}`
        )
      })
  }
}

export default App
