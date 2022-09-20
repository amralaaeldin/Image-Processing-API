import express from 'express';
import imgRoutes from './imgRoutes';
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('Welcome to Image Processing API!');
});

routes.use('/image', imgRoutes);

export default routes;
