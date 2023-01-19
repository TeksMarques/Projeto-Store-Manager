const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = chai;
chai.use(sinonChai);

const salesMock = require("../mocks/salesMock");
const salesService = require("../../../src/services/salesService");
const salesController = require("../../../src/controllers/salesController");

describe("Testing Sale Controller", () => {
  describe("Testing New Sales", () => {
    it("1", async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesService, "newSale").resolves({
        status: 201,
        response: { id: 1, itemsSold: [...salesMock.mockAllSales] },
      });

      await salesController.newSaleProduct(req, res);
    });
  });
})