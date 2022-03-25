import {
    logger
} from './logger';

const boilerplate = {
    template: async (req: any, res: {
        status: (arg0: number) => {
            (): any;
            new(): any;
            send: {
                (arg0: string): void;new(): any;
            };
        };
    }) => {
        try {
            logger.info('POST template');
            res.status(200).send('ok');
        } catch (e) {
            console.log(e.message);
            res.status(500).send(e.message);
        }
    },
};

export default boilerplate;
