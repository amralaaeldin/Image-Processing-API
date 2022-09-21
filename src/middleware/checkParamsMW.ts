/* eslint-disable @typescript-eslint/ban-types */
import express from 'express';

export default function checkParams(
  req: express.Request,
  res: express.Response,
  next: Function
) : void | express.Response {
  if (!req.query.filename)
    return res
      .status(422)
      .send('Unprocessable Entity: missing filename url query param');
  next();
}
