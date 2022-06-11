import { Request, Response } from "express";

export const getDefaultRoute = async (req: Request, res: Response) => {
  res.statusCode = 400;
  res.send(JSON.stringify({ error: "Requested route does not exist" }));
};
