const Expense = require("../models/expenseModel");

exports.createExpense = async (req, res) => {
	const expense = req.body;
	const createExpense = new Expense(expense);
	await createExpense.save();
	res.send(createExpense);
};

exports.getExpenses = async (req, res) => {
	const expenses = await Expense.find({});
	res.send(expenses);
};

exports.getExpense = async (req, res) => {
	const expense = await Expense.findById(req.params.id);
	res.send(expense);
};

exports.updateExpense = async (req, res) => {
	const { date, name, expense } = req.body;
	const expenseData = await Expense.findById(req.params.id);
	expenseData.date = date || expenseData.date;
	expenseData.name = name || expenseData.name;
	expenseData.expense = expense || expenseData.expense;
	await expenseData.save();
	res.send(expenseData);
};

exports.deleteExpense = async (req, res) => {
	const expense = await Expense.findById(req.params.id);
	await expense.deleteOne();
	res.send(expense);
};
