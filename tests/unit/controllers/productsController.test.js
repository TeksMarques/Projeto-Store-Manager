const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const productsService = require("../../../src/services/productsService");
const productsController = require("../../../src/controllers/productsController");
const productsMock = require("../mocks/productsMock");

chai.use(sinonChai);
const { expect } = require("chai");

describe("Testing controller", () => {
  describe("Testing Find All", () => {
    it("1", async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, "findAll")
        .resolves(productsMock.mockAllProducts);

      await productsController.findAll(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(productsMock.mockAllProducts);
    });
  });
  describe("Testing Find by Id", () => {
    it("2", async () => {
      const res = {};
      const req = {
        params: { id: 1 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, "findById")
        .resolves(productsMock.mockOneProduct);

      await productsController.findById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(productsMock.mockOneProduct[0]);
    });
  });

  describe("Testing Update Products", () => {
    it("3", async () => {
      const res = {};
      const req = {
        params: { id: 1 },
        body: { name: "XXX" }
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, "updateProduct")
        .resolves({ status: 200, response: { name: "XXX", id: 1 } });

      await productsController.updateProduct(req, res);
    });
  });

  describe("Testing Delete Product", () => {
    it("4", async () => {
      const res = {};
      const req = {
        params: { id: 1 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsService, "deleteProduct").resolves({ status: 204 });

      await productsController.deleteProduct(req, res);
    });
  });
});