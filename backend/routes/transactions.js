const {
  addIncome,
  deleteIncome,
  getIncomes,
} = require("../controllers/income");
const router = require("express").Router();

// Created Endpoint for Income
router
  .post("/add-income", addIncome)
  .get("/get-incomes", getIncomes)
  .delete("/delete-income/:id", deleteIncome);

module.exports = router;
