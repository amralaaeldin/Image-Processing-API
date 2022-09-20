import express from 'express';
import imgRoutes from './imgRoutes';
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('Hello, World!');
});

routes.use('/image', imgRoutes);

export default routes;
