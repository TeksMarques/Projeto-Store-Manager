const productsServices = require('../services/productsServices');

const findAll = async (_req, res) => {
  const products = await productsServices.findAll();
  res.status(200).json(products);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const product = await productsServices.findById(id);
  console.log(product);
  if (!product.err) {
    return res.status(404).json(product.err);
  }
  return res.status(200).json(product[0]);
};

module.exports = {
  findAll,
  findById,
};