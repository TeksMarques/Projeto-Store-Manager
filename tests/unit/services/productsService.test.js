const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const productsModel = require("../../../src/models/productsModel");
const productsService = require("../../../src/services/productsService");
const productsMock = require("../mocks/productsMock");

chai.use(sinonChai);
const { expect } = require("chai");

describe("Testing Products Service", () => {
  describe("Testing Find All", () => {
    afterEach(() => {
      sinon.restore();
    });
    it("1", async () => {
      sinon
        .stub(productsModel, "findAll")
        .resolves(productsMock.mockAllProducts);

      results = await productsService.findAll();

      expect(results).to.be.deep.equal(productsMock.mockAllProducts);
    });
  });
  describe("Testing Find By Id", () => {
    afterEach(() => {
      sinon.restore();
    });
    it("2", async () => {
      sinon.stub(productsModel, "findById").resolves([]);
      const orderId = 999;
      results = await productsService.findById(orderId);

      expect(results).to.be.deep.equal({
        err: { code: "not_found", message: "Product not found" },
      });
    });
    it("3", async () => {
      const orderId = 1;
      sinon
        .stub(productsModel, "findById")
        .resolves(productsMock.mockAllProducts);
      results = await productsService.findById(orderId);
      expect(results).to.be.deep.equal(productsMock.mockAllProducts);
    });
  });
  describe("Testing Update Product", () => {
    afterEach(() => {
      sinon.restore();
    });
    it("4", async () => {
      const name = "Testando";
      const id = 1;

      sinon.stub(productsModel, "findById").resolves([["item", "item2"]]);

      const results = await productsService.updateProduct(id, name);

      expect(results).to.be.true;
    });
  });
});