const connection = require('./connection');

const newSale = async (sales) => {
  const query = 'INSERT INTO sales (date) values (NOW())';
  const [saleId] = await connection.execute(query);
  const idSale = saleId.insertId;
  const promises = [];
  sales.forEach((elem) => {
    const insertQuery = `INSERT INTO sales_products
      (sale_id, product_id, quantity) VALUES (?, ?, ?)`;
    const insert = connection.execute(insertQuery, [
      idSale,
      elem.productId,
      elem.quantity,
    ]);
    promises.push(insert);
  });
  await Promise.all(promises);
  return idSale;
};

module.exports = {
  newSale,
};