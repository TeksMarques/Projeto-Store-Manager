const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { expect } = require("chai");

const salesModel = require("../../../src/models/salesModel");
const salesMock = require("../mocks/salesMock");
const connection = require("../../../src/models/connection");

describe("Testing Sale Model", () => {
  describe("Testing Find All Sales", () => {
    afterEach(() => {
      sinon.restore();
    });
    it("1", async () => {
      sinon.stub(connection, "execute").resolves(salesMock.mockAllSales);

      await salesModel.findAllSales();
    });
    it("2 - Testing Find by Id Sales", async () => {
      sinon.stub(connection, "execute").resolves([salesMock.mockfindSaleById]);

      await salesModel.findSaleById(1);
    });
  });
});