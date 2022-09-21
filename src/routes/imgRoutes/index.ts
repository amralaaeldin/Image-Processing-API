import express from 'express';
import sharp from 'sharp';
import path from 'path';
import resolveParam from './../../utils/resolveParam';
import makeIfNotExist from './../../utils/makeIfNotExist';
import checkParams from '../../middleware/checkParamsMW';
import isExist from '../../middleware/isExistMW';

const routes = express.Router();

routes.get('/', checkParams, isExist, async (req, res) => {
  const imagePath = `./imgs/${req.query.filename}.jpg`;
  const width = resolveParam(req.query.width);
  const height = resolveParam(req.query.height);

  try {
    await makeIfNotExist('./output');
    sharp(imagePath)
      .resize({ width, height })
      .toFile(
        `./output/${req.query.filename}-w-${req.query.width}-h-${req.query.height}.jpg`,
        (e) => {
          if (e)
            return res.send(`Image ${req.query.filename}.jpg is not exist`);
          res.sendFile(
            path.resolve() +
              `/output/${req.query.filename}-w-${req.query.width}-h-${req.query.height}.jpg`
          );
        }
      );
  } catch (err) {
    console.log(err);
  }
});

export default routes;
