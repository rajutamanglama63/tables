const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const companyCategoryRoute = require("./routes/companyCategory");
const companyRoute = require("./routes/company");

dotenv.config();

const app = express();

const Port = process.env.PORT || 4000;

connectDB();

app.use(express.json());
app.use(cors());

// app.get("/", (req, res) => {
//     res.send("Hello world!");
// });

app.use("/api/companyCategory", companyCategoryRoute);
app.use("/api/company", companyRoute);

app.listen(Port, () => {
    console.log(`Server running on port http://localhost:${Port}`);
});