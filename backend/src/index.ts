import express, { Request, Response } from 'express';
import { Server } from "socket.io";
import socketIoHandler from './socketIo';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
    allowedHeaders: [
      'set-cookie',
      'Content-Type',
      'Access-Control-Allow-Origin',
      'Access-Control-Allow-Credentials',
    ],
  })
);

app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
  res.send('Hello World');
});

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3333',
    credentials: true,
  },
});

socketIoHandler(io);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
