import * as winston from 'winston';
import * as moment from 'moment-timezone';

const customFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.simple(),
  winston.format.printf(info => {
    const { level, message } = info;

    const ts = moment()
      .tz('America/Sao_Paulo')
      .format('YYYY/MM/DD HH:mm:ss.SSS');
    return `${ts} [${level}]: ${message}`;
  })
);

const winstonLogger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: customFormat,
    }),
  ],
});

const logger = {
  error: (message: string) => {
    winstonLogger.error(message);
  },
  warn: (message: string) => {
    winstonLogger.warn(message);
  },
  info: (message: string) => {
    winstonLogger.info(message);
  },
  debug: (message: string) => {
    winstonLogger.debug(message);
  },
};

export { logger };
