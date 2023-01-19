const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { expect } = require("chai");

const productsModel = require("../../../src/models/productsModel");
const productsMock = require("../mocks/productsMock");
const connection = require("../../../src/models/connection");

describe("Testando Product Models", () => {
  describe("Testing Find All", () => {
    afterEach(() => {
      sinon.restore();
    });
    it("1", async () => {
      sinon
        .stub(connection, "execute")
        .resolves([productsMock.mockAllProducts]);

      results = await productsModel.findAll();

      expect(results).to.be.deep.equal(productsMock.mockAllProducts);
    });
  });

  describe("Testing Find by Id", () => {
    afterEach(() => {
      sinon.restore();
    });
    it("2", async () => {
      sinon
        .stub(connection, "execute")
        .resolves([productsMock.mockAllProducts[0]]);

      results = await productsModel.findById(1);

      expect(results).to.be.deep.equal(productsMock.mockOneProduct);
    });
  });

  describe("Update Product", () => {
    afterEach(() => {
      sinon.restore();
    });
    it("3", async () => {
      const newProductName = { name: "Teste" };
      const idProduct = 1;

      sinon.stub(connection, "execute").resolves([{ affectedRows: 1 }]);

      const result = await productsModel.updateProduct(
        idProduct,
        newProductName
      );

      expect(result).to.be.deep.equal(1);
    });
  });
});