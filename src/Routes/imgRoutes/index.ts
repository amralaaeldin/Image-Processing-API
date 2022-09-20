import express from 'express';
import sharp from 'sharp';
import { promises as fsPromises, statSync } from 'fs';
import path from 'path';
import resolveParam from './../../utils/resolveParam';
import checkParams from '../../middleware/checkParamsMW';

const routes = express.Router();

routes.get('/', checkParams, async (req, res) => {
  const basePath = './imgs';
  const width = resolveParam(req.query.width);
  const height = resolveParam(req.query.height);

  try {
    if (!statSync('./output').isDirectory()) {
      await fsPromises.mkdir('./output');
    }
    sharp(`${basePath}/${req.query.filename}.jpg`)
      .resize({ width, height })
      .toFile(`./output/${req.query.filename}.jpg`, (e) => {
        if (e) return res.send(`Image ${req.query.filename}.jpg is not exist`);
        res.sendFile(path.resolve() + `/output/${req.query.filename}.jpg`);
      });
  } catch (err) {
    console.log(err);
  }
});

export default routes;
