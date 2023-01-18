const productsService = require('../services/productsService');
const { productValidate } = require('../middlewares/validations');

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

const createProduct = async (req, res) => {
  const { name } = req.body;
  const id = await productsService.createProduct(name);
  if (id.status) return res.status(id.status).json(id.response);
  return res.status(201).json({ id, name });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { status, response } = await productsService.deleteProduct(id);
  res.status(status).json(response);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const resValidation = await productValidate(name);
  if (resValidation) {
    return res.status(resValidation.status).json(resValidation.response);
  }
  const result = await productsService.updateProduct(id, name);
  if (!result) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json({ id, name });
};

  module.exports = {
    findAll,
    findById,
    createProduct,
    deleteProduct,
    updateProduct,
  };