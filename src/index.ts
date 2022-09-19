import express from 'express';

const app = express();
const port = 7000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Running on ${port}...`);
});

export default app;
