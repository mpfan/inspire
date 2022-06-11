import { Request, Response } from "express";

import { logger } from "../services/LoggingService";

export const getDefaultRoute = async (req: Request, res: Response) => {
  logger.info(`Default route requested. Route requested: ${req.path}`);

  res.statusCode = 400;
  res.send(JSON.stringify({ error: "Requested route does not exist" }));
};
