require("dotenv").config(); // Load environment variables

const express = require("express");
const app = express();
const cors = require("cors");
const dbConnection = require("./db");

const port = process.env.PORT || 5000;
const mongoURL = process.env.MONGODB_URL; // Get MongoDB URL from env

app.use(express.json());
app.use(cors());

const AdminLoginRoute = require("./routes/adminLogin");
const UserRoute = require("./routes/user");
const carsRoute = require("./routes/bikes");
const BookingRoute = require("./routes/bookingRoute");

app.use("/api/bikes/", carsRoute);
app.use("/api/users/", UserRoute);
app.use("/api/bookings/", BookingRoute);
app.use("/api/admin/", AdminLoginRoute);

app.get("/", (req, res) => res.send("Hello Pumpkin"));

app.listen(port, () => console.log(`Server running on port ${port}`));
