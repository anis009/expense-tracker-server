const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { connectDB } = require("./config/db");
const expenseRouter = require("./routes/expenseRoutes");
require("colors");
const app = express();

require("dotenv").config();

const port = process.env.PORT || 7070;

// connection to database
connectDB();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", async (req, res) => {
	res.send("server is running ");
});

app.use("/api/expense/", expenseRouter);

app.listen(port, () => {
	console.log(`server is running on port ${port}`.cyan.underline);
});
