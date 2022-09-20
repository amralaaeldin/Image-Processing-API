import express from 'express';
import sharp from 'sharp';
import { promises as fsPromises, statSync } from 'fs';
import path from 'path';

const routes = express.Router();

routes.get('/', async (req, res) => {
  const basePath = './imgs';
  const width = req.query.width
    ? parseInt(req.query.width as unknown as string)
    : undefined;
  const height = req.query.height
    ? parseInt(req.query.height as unknown as string)
    : undefined;
  try {
    if (!statSync('./output').isDirectory()) {
      await fsPromises.mkdir('./output');
    }
    sharp(`${basePath}/${req.query.filename}.jpg`)
      .resize({ width, height })
      .toFile(`./output/${req.query.filename}.jpg`, (e, info) => {
        if (e) return res.send(`Image ${req.query.filename}.jpg is not exist`);
        res.sendFile(path.resolve() + `/output/${req.query.filename}.jpg`);
      });
  } catch (err) {
    console.log(err);
  }
});

export default routes;
