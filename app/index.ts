import Server from './server/server';
import * as dotenv from 'dotenv';
dotenv.config();

(async function() {
    Server.bootstrap();
})();
