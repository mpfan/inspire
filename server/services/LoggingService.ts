import winston, { Logger } from "winston";

export const logger: Logger = winston.createLogger({
  transports: [new winston.transports.Console()],
});
