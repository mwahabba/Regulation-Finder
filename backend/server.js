const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
res.send("Server running successfully");
});

app.listen(4000, () => {
console.log("Server running successfully on port 4000");
});
