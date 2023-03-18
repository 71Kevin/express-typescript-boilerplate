import express, { Request, Response } from 'express';
import boilerplate from '../lib/client';

const router = express.Router();

router.get('/ping', (_: Request, res: Response) => {
  res.send({ message: 'pong' });
});

router.post('/template', async (req: Request, res: Response) => {
  await boilerplate.template(req, res);
});

export default router;
