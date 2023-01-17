const salesServices = require('../services/salesService');

const newSaleProduct = async (req, res) => {
  const sales = req.body;
  const sale = await salesServices.newSale(sales);
  if (sale.status) return res.status(sale.status).json(sale);
  return res.status(201).json(sale);
};

module.exports = {
  newSaleProduct,
};