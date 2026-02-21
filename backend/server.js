const express = require("express");

const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin" , "*");
  next();
});

app.get("/api/message", (req,res) => {
  res.json({
    message: "Backend bağlantısı başarılı!"
  });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
