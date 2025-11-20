const express = require('express');
const app = express();
app.get('/order', (req, res) => {
  res.json({ status: "ok" });
});
app.listen(3000, () => console.log("Order service running"));
