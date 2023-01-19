const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const salesModel = require("../../../src/models/salesModel");
const salesService = require("../../../src/services/salesService");
const salesMock = require("../mocks/salesMock");

chai.use(sinonChai);
const { expect } = require("chai");

describe("Testing Sale Service", () => {
  describe("Testing Find All", () => {
    it("1", async () => {
      sinon.stub(salesModel, "findAllSales").resolves(salesMock.mockAllSales);

      await salesService.findAllSales();

    });
  });

  describe("Testing Find by Id", () => {
    it("2", async () => {
      sinon.stub(salesModel, "findSaleById").resolves(salesMock.mockOneSale);

      await salesService.findSaleById(1);
    });

  });
});


// Os testes foram feitos com ajuda do colega de turma, Alan Foster, que me ajudou a entender como fazer os testes unitários.