import { Server as SocketServer } from 'socket.io'
import { Server as HttpServer } from 'http';

export const createRealTimeServer = (httpServer: HttpServer) => {
  const io = new SocketServer(httpServer);

  io.on("connection", socket => {
    const cookie = socket.handshake.headers.cookie;
    const username = cookie?.split("=").pop();
    console.log(username);
    socket.on("message", message => {
      // enviar un evento
      io.emit("message", {
        user: username,
        message: message
      });
    });

  });
}