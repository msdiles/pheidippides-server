import {Packet, Socket} from "socket.io"
import {NextFunction} from "express"
import AuthController from "../controllers/auth.controller"

class SocketHandler {
  private io: Socket

  constructor(socket: Socket) {
    this.io = socket
    this.io.use(this.CheckToken)
    this.io.on("connection", (socket: Socket) => {
      console.log("Connection")
      this.io.emit("message","Asdasd")
      console.log(socket.handshake.query.token)

      socket.on("disconnect", () => {
        console.log("socket", "DISCONNECT")
      })
    })
  }

  private CheckToken = async (socket: any, next: NextFunction) => {
    try {
      const token = socket.handshake.query.token
      await AuthController.asyncVerify(token, process.env.ACCESS_SECRET_KEY as string)
      return next()
    } catch (e) {
      return next(new Error("Authorization error"))
    }

  }
}

export default SocketHandler
