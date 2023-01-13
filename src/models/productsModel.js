const connection = require('./connection');

const findAll = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  return products;
};

const findById = async (id) => {
  const [products] = await connection.execute('SELECT * FROM products WHERE id=?', [id]);
  return products;
};

const createProduct = async (name) => { 
  const [{ insertId }] = await connection.execute(
    'Insert INTO products (name) Values (?)', [name],
  );
  return insertId;
};

module.exports = {
  findAll,
  findById,
  createProduct,
};