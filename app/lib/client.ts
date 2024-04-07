import { Request, Response, NextFunction } from 'express';
import { logger } from './logger';

class BoilerplateController {
  public template = async (_req: Request, res: Response, _next: NextFunction): Promise<void> => {
    try {
      logger.info('POST template');
      res.status(200).send('ok');
    } catch (error: unknown) {
      logger.error(`Error in POST template: ${(error as Error).message}`);
      res.status(500).send('Internal Server Error');
    }
  };
}

export default new BoilerplateController();
