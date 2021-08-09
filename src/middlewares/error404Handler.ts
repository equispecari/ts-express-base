import createError from "http-errors";
import { Request, Response, NextFunction } from "express";

export const error404Handler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next(createError(404));
};
