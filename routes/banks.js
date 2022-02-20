const express = require('express');
const root = require('../utils/root');
const fs = require('fs');
const router = express.Router();

const getInvestments = () => {
  const investments = JSON.parse(fs.readFileSync(root + '/_data/banks.json'));

  return investments;
}

const getBankNames = () => {
  const investments = getInvestments();
  const bankNames = [];

  for (investment of investments) bankNames.push(investment.name);

  return bankNames;
}

router.get('/list', async (req, res) => {
  try {
    const data = getInvestments();
    res.status(200).send(data);
  } catch (err) {
    res.status(400).json({
      message: 'Error'
    });
  }
});

router.get('/list/:type&:withdrawDate', async (req, res) => {
  let { type, withdrawDate } = req.params;
  withdrawDate = new Date(withdrawDate);

  const investments = getInvestments();
  const selectedInvestments = [];

  for (let investment of investments) {
    if (investment.hasOwnProperty(type)) {
      for (const option of investment[type]) {
        if (new Date(option.dueDate) >= withdrawDate) {
          selectedInvestments.push({
            'name': investment.name,
            investmentType: option
          });
        }
      }
    }
  }

  res.send(selectedInvestments);
});

router.get('/logos', async (req, res) => {
  res.send('Acesse /logos/{id} para receber o logo de um banco com base em seu código.');
});

router.get('/logos/:code', (req, res) => {
  const { code } = req.params;
  const bankNames = getBankNames();

  for (const name of bankNames) {
    if (code === name) res.send(root + '/assets/' + code + '.png');
  }

  res.send('Não há bancos cadastrados com este código.');
});

module.exports = router;
