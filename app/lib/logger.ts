import winston, { format, Logger as WinstonLogger } from 'winston';
import moment from 'moment-timezone';

const timezone = process.env.TIMEZONE || 'America/Sao_Paulo';

const createCustomFormat = () =>
  format.combine(
    format.colorize(),
    format.timestamp(),
    format.simple(),
    format.printf(({ level, message }) => {
      const timestamp = moment().tz(timezone).format('YYYY/MM/DD HH:mm:ss.SSS');
      return `${timestamp} [${level}]: ${message}`;
    }),
  );

const createLogger = (): WinstonLogger => {
  const consoleTransport = new winston.transports.Console({
    format: createCustomFormat(),
  });

  return winston.createLogger({
    transports: [consoleTransport],
  });
};

const logger: WinstonLogger = createLogger();

export { logger };
