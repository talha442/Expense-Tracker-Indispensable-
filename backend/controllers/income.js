const IncomeSchema = require("../models/incomeModel");

/* ADD INCOME */
exports.addIncome = async (req, res) => {
  // destructuring
  const { title, amount, category, description, date } = req.body;
  const income = IncomeSchema({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    // validation
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "All field are required" });
    }
    if (amount <= 0 || amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount must be a positive number" });
    }
    await income.save();
    res.status(200).json({ message: "Income added" });
  } catch (error) {
    return res.status(500).json({ message: "Fill Correct Information" });
  }

  console.log(income);
};

/* GET INCOME */
exports.getIncomes = async (req, res) => {
  try {
    const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
    res.status(200).json(incomes);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

/* DELETE INCOME */
exports.deleteIncome = async (req, res) => {
  const { id } = req.params;
  IncomeSchema.findByIdAndDelete(id)
    .then((income) => {
      res.status(200).json({ message: "Income deleted successfully" });
    })
    .catch((error) => {
      return res.status(500).json({ message: "Internal Server Error" });
    });
};
