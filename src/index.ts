import express, { Request, Response } from 'express'
import http from 'http'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: 'http://localhost:5173',
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


server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
