import express from 'express';
import routes from './Routes';

const app = express();
const port = 7000;

app.use('/', routes);

app.listen(port, () => {
  console.log(`Running on ${port}...`);
});

export default app;
