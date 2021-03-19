const express = require("express");

const app = express();
const connectDB = require("./config/db");

connectDB();

// init middleware
app.use(express.json({ extended: true }));

app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/items", require("./routes/api/items"));
// app.use("/api/market", require("./routes/api/market"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`port is running on ${PORT}`);
});
