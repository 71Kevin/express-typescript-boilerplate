import Server from './server/server';
import * as dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const port = process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : 3000;
  const server = new Server(port);
  server.start();
}

startServer();
