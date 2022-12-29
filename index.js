require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.SERVER_PORT || 3000;

// Default Middlewares
app.use(express.json());

// Routes
const scrapeUsername = require("./routes/scrapeUsername");

// Implement Routes
app.use("/", scrapeUsername);

app.listen(port, () => {
    console.log(`Server is listening on PORT: ${port}`);
});
  