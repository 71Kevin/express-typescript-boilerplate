import { logger } from './logger';

const boilerplateClient = {
    boilerplateTest: async (req, res) => {
        try {
            logger.info('boilerplate confirmed');
            res.status(200).send('ok');
        } catch (e) {
            console.log(e.message);
            res.status(500).send(e.message);
        }
    },
};

export default boilerplateClient;
