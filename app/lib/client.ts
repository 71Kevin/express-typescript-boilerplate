import { Request, Response } from 'express';
import { logger } from './logger';

const boilerplate = {
  template: async (req: Request, res: Response) => {
    try {
      logger.info('POST template');
      res.status(200).send('ok');
    } catch (error: any) {
      logger.error(`Error in POST template: ${error.message}`);
      res.status(500).send('Internal Server Error');
    }
  },
};

export default boilerplate;
