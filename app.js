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
  res.send(JSON.stringify(retObj));
});

app.get("/v3/3rd/files/:file_id/download", (req, res) => {
  const retObj = {
    code: 0,
    data: {
      url: "https://m.xiguacity.cn/%E5%89%AF%E6%9C%AC%E7%94%9F%E4%BA%A7%E6%8E%92%E7%8F%AD%E8%A1%A8-WUH-20191230%20V2-1.xlsx",
    },
  };
  res.send(JSON.stringify(retObj));
});

app.get("/v3/3rd/files/:file_id/permission", (req, res) => {
  const retObj = {
    code: 0,
    data: {
      comment: 1,
      copy: 1,
      download: 1,
      history: 1,
      print: 1,
      read: 1,
      rename: 1,
      saveas: 1,
      update: 1,
      user_id: "404",
    },
  };
  res.send(JSON.stringify(retObj));
});

app.get("/v3/3rd/users", (req, res) => {
  const retObj = {
    code: 0,
    data: [
      {
        id: "404",
        name: "Joe Doe",
      },
    ],
  };
  res.send(JSON.stringify(retObj));
});

app.get("/v3/3rd/files/:file_id/upload", (req, res) => {
  const retObj = {
    code: 0,
    data: {
      create_time: 1670218748,
      creator_id: "404",
      id: "9",
      modifier_id: "404",
      modify_time: 1670328304,
      name: "副本生产排班表-WUH-20191230 V2-1.xlsx",
      size: 18961,
      version: 180,
    },
  };
  res.send(JSON.stringify(retObj));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
