const productsModel = require('../models/productsModel');
const { productValidate } = require('../middlewares/validations');

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

const createProduct = async (name) => {
  const validateProd = productValidate(name);
  if (validateProd) return validateProd;
  const product = await productsModel.createProduct(name);
  return product;
};

const deleteProduct = async (id) => {
  const [product] = await productsModel.findById(id);  
  if (!product) return { status: 404, response: { message: 'Product not found' } };
  await productsModel.deleteProduct(id);
  return { status: 204 };
};

const updateProduct = async (id, name) => {
  const [result] = await productsModel.findById(id);
  if (result !== undefined) {
    await productsModel.updateProduct(id, name);
    return true;
  }
  return false;
};

module.exports = {
  findAll,
  findById,
  createProduct,
  deleteProduct,
  updateProduct,
};