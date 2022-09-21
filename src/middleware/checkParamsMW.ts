/* eslint-disable @typescript-eslint/ban-types */
import express from 'express';

export default function checkParams(
  req: express.Request,
  res: express.Response,
  next: Function
): void | express.Response {
  if (!req.query.filename)
    return res
      .status(422)
      .send('Unprocessable Entity: missing filename url query param');

  if (req.query.width && !Number(req.query.width as string))
    req.query.width = undefined;

  if (req.query.height && !Number(req.query.height as string))
    req.query.height = undefined;
  next();
}
