const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(
    "mongodb+srv://goyalom936:Omgoyal90@cluster0.tr8ah6c.mongodb.net/",
    { useUnifiedTopology: true, useNewUrlParser: true }
  );

  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log("Mongo DB Connection Successfull");
  });

  connection.on("error", () => {
    console.log("Mongo DB connection Error");
  });
}

connectDB();

module.exports = mongoose;
