import express from 'express'
import { createServer } from 'http';
import { createRealTimeServer } from './realtimeServer'
import path from 'path';
import cookieParser from 'cookie-parser';
import router from './routes';

const app = express();
const httpServer = createServer(app);

// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.use(cookieParser());

// Routes
app.use(router);

// Public
app.use(express.static(path.join(__dirname, 'public')));

// Listen server
httpServer.listen(app.get("port"), () => {
  console.log(`Running server on "http://localhost:${app.get("port")}"`)
});

// Listen socket.io server
createRealTimeServer(httpServer);