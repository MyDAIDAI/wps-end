const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/v3/3rd/files/:file_id", (req, res) => {
  const retObj = {
    code: 0,
    data: {
      create_time: 1670218748,
      creator_id: "404",
      id: "9",
      modifier_id: "404",
      modify_time: 1670328304,
      name: "统计月报.xlsx",
      size: 18961,
      version: 180,
    },
  };
  console.log("req", req);
  res.send(JSON.stringify(retObj));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
