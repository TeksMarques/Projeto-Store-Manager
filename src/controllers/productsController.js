const productsService = require('../services/productsService');

const findAll = async (_req, res) => {
  const products = await productsService.findAll();
  res.status(200).json(products);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const product = await productsService.findById(id);
  if (product.err) {
    return res.status(404).json(product.err);
  }
  return res.status(200).json(product[0]);
};

module.exports = {
  findAll,
  findById,
};
// const createProduct = async (req, res) => {
//   const { name } = req.body;
//   const id = await productsServices.createProduct(name);
//   return res.status(201).json({ id, name });
// };
