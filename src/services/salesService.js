const salesModels = require('../models/salesModel');
const salesValidition = require('../middlewares/saleValidation');

const newSale = async (sales) => {
  const erro = await salesValidition.validations(sales);
  if (erro) {
    return erro;
  }

  const id = await salesModels.newSale(sales);
  return { id, itemsSold: sales };
};

module.exports = {
  newSale,
};