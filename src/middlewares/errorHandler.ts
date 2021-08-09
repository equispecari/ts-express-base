import { HttpError } from "http-errors";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const httpStatus = err.status || 500;

  return res.status(httpStatus).send({
    status: httpStatus,
    message: err.message || "Internal server error",
  });
};
