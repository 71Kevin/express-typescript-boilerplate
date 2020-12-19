import * as express from 'express';
import boilerplateClient from '../lib/client';
const router = express.Router();

router.get('/ping', (req, res) => res.send({ message: 'pong' }));

router.post('/boilerplate', async function (req, res) {
    await boilerplateClient.boilerplateTest(req, res);
});

export default router;
