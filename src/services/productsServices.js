const productsModels = require('../models/productsModels');

const findAll = async () => {
  const products = productsModels.findAll();
  return products;
};

const findById = async (id) => {
  const products = await productsModels.findById(id);
  
    if (!products.length) {
      return { err: { code: 'not_found', message: 'Product not found' } };
    }
    return products;
  };

module.exports = {
  findAll,
  findById,
};