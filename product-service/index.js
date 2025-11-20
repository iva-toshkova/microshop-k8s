const express = require('express');
const app = express();
app.get('/product', (req, res) => {
  res.json({ status: "ok" });
});
app.listen(3000, () => console.log("Product service running"));
