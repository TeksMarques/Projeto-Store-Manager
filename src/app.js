const express = require('express');
const productsController = require('./controllers/productsController');
const salesController = require('./controllers/salesController');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productsController.findAll);
app.get('/products/:id', productsController.findById);
app.post('/products', productsController.createProduct);
app.post('/sales', salesController.newSaleProduct);
app.get('/sales', salesController.findAllSales);
app.get('/sales/:id', salesController.findSaleById);
app.delete('/products/:id', productsController.deleteProduct);
app.put('/products/:id', productsController.updateProduct);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;