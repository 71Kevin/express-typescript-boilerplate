import * as express from 'express';
import { logger } from '../lib/logger';
import router from './router';

class Server {
    public express;
    public constructor() {
        this.express = express();
    }
    middlewares() {
        this.express.use(express.json({ limit: '200MB' }));
    }

    routes() {
        this.express.use(router);
    }

    listen() {
        this.express.listen(process.env.APP_PORT, () =>
            logger.info(`express-typescript-boilerplate initialized on port: ${process.env.APP_PORT}`),
        );
    }

    bootstrap() {
        this.middlewares();
        this.routes();
        this.listen();
    }
}

export default new Server();
