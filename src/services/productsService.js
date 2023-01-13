const productsModel = require('../models/productsModel');

const findAll = async () => {
  const products = await productsModel.findAll();
  return products;
};

const findById = async (id) => {
  const product = await productsModel.findById(id);
  if (!product.length) {
    return { err: { code: 'not_found', message: 'Product not found' } };
  }
  return product;
};
// const createProduct = async (name) => {
//   const product = await productsModels.createProduct(name);
//   return product;
// };

module.exports = {
  findAll,
  findById,
  // createProduct,
};