const express = require("express");
const {
  createExpense,
  getExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
} = require("../controllers/expenseControllers");

const router = express.Router();

router.route("/").post(createExpense).get(getExpenses);
router.route("/:id").get(getExpense).put(updateExpense).delete(deleteExpense);

module.exports = router;
