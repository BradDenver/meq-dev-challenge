import { Request, Response, NextFunction } from "express";

import { readData } from "../lib/data.js";

export const dataProvider = async (
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.locals.data = await readData();
    next();
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "unable to read data" });
    return;
  }
};
