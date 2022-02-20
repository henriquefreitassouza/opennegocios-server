const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const banksRouter = require('./routes/banks');

require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/banks', banksRouter);

app.get('/', (req, res) => {
  res.send('Acesse a rota /banks/list para puxar os dados de investimentos.');
});

app.get('/banks', (req, res) => {
  res.send('Acesse a rota /banks/list para puxar os dados de investimentos.');
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;
