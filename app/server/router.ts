import * as express from 'express';
import boilerplate from '../lib/client';
const router = express.Router();

router.get(
  '/ping',
  (
    req: any,
    res: {
      send: (arg0: { message: string }) => any;
    }
  ) =>
    res.send({
      message: 'pong',
    })
);

router.post(
  '/template',
  async function (
    req: any,
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        send: { (arg0: string): void; new (): any };
      };
    }
  ) {
    await boilerplate.template(req, res);
  }
);

export default router;
