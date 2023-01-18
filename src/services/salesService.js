const salesModels = require('../models/salesModel');
const salesValidition = require('../middlewares/saleValidation');
const salesModel = require('../models/salesModel');

const newSale = async (sales) => {
  const erro = await salesValidition.validations(sales);
  if (erro) {
    return erro;
  }

  const id = await salesModels.newSale(sales);
  return { id, itemsSold: sales };
};

const findAllSales = async () => {
  const allSales = await salesModel.findAllSales();
  return allSales;
};

const findSaleById = async (id) => {
  const idSale = await salesModel.findSaleById(id);
  if (idSale.length === 0) {
    return {
      error: { status: 404, message: 'Sale not found' },
    };
  }
  return idSale;
};

module.exports = {
  newSale,
  findAllSales,
  findSaleById,
};