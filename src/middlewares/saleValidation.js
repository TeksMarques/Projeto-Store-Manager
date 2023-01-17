const Joi = require('joi');
const productModels = require('../models/productsModel');

const saleSituation = Joi.object({
  productId: Joi.number().min(1).required(),
  quantity: Joi.number().min(1).required(),
});

const situation = async (error) => {
  if (error.details[0].type === 'any.required') {
    return { status: 400, message: error.message };
  }
  if (error.details[0].type === 'number.min') {
    return { status: 422, message: error.message };
  }
};

const idSales = async (sales) => {
  const maxId = await productModels.maxProduct();
  for (let index = 0; index < sales.length; index += 1) {
    if (sales[index].productId > maxId) {
      return { status: 404, message: 'Product not found' };
    }
  }
};

const validations = async (sales) => {
  const idValiditionSales = await idSales(sales);
  if (idValiditionSales) {
    return idValiditionSales;
  }
  for (let index = 0; index < sales.length; index += 1) {
    const { error } = saleSituation.validate(sales[0]);
    if (error) {
      return situation(error);
    }
  }
};

module.exports = {
  validations,
};

// Requisito 6 concluido com ajuda dos meus amigos Foster, Vinicius Campos e Felipe Lima //