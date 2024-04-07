import express, { Router, Request, Response, NextFunction } from 'express';
import boilerplateController from '../lib/client';

const router: Router = express.Router();

router.get('/ping', (_: Request, res: Response) => {
  res.send({ message: 'pong' });
});

router.post('/template', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await boilerplateController.template(req, res, next);
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

export default router;
