import { Request, Response } from "express";

import { PublicAPI } from "../model/PublicAPI";

import { sequelize } from "../services/DBService";

export const getPublicAPI = async (req: Request, res: Response) => {
  const publicAPI: PublicAPI | null = await PublicAPI.findOne({
    order: sequelize.random(),
    raw: true,
  });

  if (publicAPI == null) {
    res.statusCode = 500;
    res.send(JSON.stringify({ error: "No public API found" }));
  } else {
    res.statusCode = 200;
    res.send(JSON.stringify(publicAPI));
  }
};
