import { Request, Response } from "express";

import { PublicAPI } from "../model/PublicAPI";

import { sequelize } from "../services/DBService";

export const getPublicAPI = async (req: Request, res: Response) => {
  const publicAPI: PublicAPI | null = await PublicAPI.findOne({ order: sequelize.random() , raw: true});

  res.send(JSON.stringify(publicAPI))
};
