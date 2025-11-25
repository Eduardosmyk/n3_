const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Aplicação rodando CI/CD!");
});

const port = 3000;
app.listen(port, () => console.log("Server on port " + port));

module.exports = app;
