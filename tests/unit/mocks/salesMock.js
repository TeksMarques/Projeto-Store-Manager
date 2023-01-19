const mockAllSales = [
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  },
  {
    "productId": 3,
    "quantity": 5
  }
];

const mockOneSale = [
  {
    saleId: 1,
    date: "2023-01-18T00:09:56.000Z",
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: "2023-01-18T00:09:56.000Z",
    productId: 2,
    quantity: 10,
  },
];

const mockfindSaleById = [
  {
    date: "2023-01-18T00:09:56.000Z",
    productId: 1,
    quantity: 5,
  },
  {
    date: "2023-01-18T00:09:56.000Z",
    productId: 2,
    quantity: 10,
  },
];

module.exports = {
  mockAllSales,
  mockOneSale,
  mockfindSaleById,
};