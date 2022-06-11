import { Request, Response } from "express";

import { PublicAPI } from "../model/PublicAPI";

import { sequelize } from "../services/DBService";
import { logger } from "../services/LoggingService";

export const getPublicAPI = async (req: Request, res: Response) => {
  logger.info("API requested");

  const publicAPI: PublicAPI | null = await PublicAPI.findOne({
    order: sequelize.random(),
    raw: true,
  });

  if (publicAPI == null) {
    logger.error("Could not fetch public API from database");

    res.statusCode = 500;
    res.send(JSON.stringify({ error: "No public API found" }));
  } else {
    logger.info("Public API fetched successfully from database");

    res.statusCode = 200;
    res.send(JSON.stringify(publicAPI));
  }
};
