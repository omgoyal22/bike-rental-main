require("dotenv").config(); // Load environment variables
const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log("MongoDB Connection Successful");
  });

  connection.on("error", (err) => {
    console.log("MongoDB Connection Error:", err);
  });
}

connectDB();

module.exports = mongoose;
