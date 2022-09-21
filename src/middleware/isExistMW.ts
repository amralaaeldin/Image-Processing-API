/* eslint-disable @typescript-eslint/ban-types */
import express from 'express';
import path from 'path';
import { existsSync } from 'fs';

export default function isExist(
  req: express.Request,
  res: express.Response,
  next: Function
) : void | express.Response {
  if (
    existsSync('./output') &&
    existsSync(`./output/${req.query.filename}.jpg`)
  )
    return res.sendFile(path.resolve() + `/output/${req.query.filename}.jpg`);
  next();
}
