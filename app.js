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
      id: "EOCVQPCDCCE4ZJ2X6MTF",
      modifier_id: "404",
      modify_time: 1670328304,
      name: "test.xlsx",
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
      url: "https://m.xiguacity.cn/test.xlsx",
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

app.post("/v3/3rd/files/:file_id/upload", (req, res) => {
  const retObj = {
    code: 0,
    data: {
      create_time: 1670218748,
      creator_id: "404",
      id: "EOCVQPCDCCE4ZJ2X6MTF",
      modifier_id: "404",
      modify_time: 1670328304,
      name: "test.xlsx",
      size: 18961,
      version: 180,
    },
  };
  res.send(JSON.stringify(retObj));
});

app.get("/v3/3rd/files/:file_id/upload/prepare", (req, res) => {
  const retObj = {
    code: 0,
    data: {
      digest_types: ["sha1"],
    },
    msg: "",
  };
  res.send(JSON.stringify(retObj));
});

app.post("/v3/3rd/files/:file_id/upload/address", (req, res) => {
  const retObj = {
    code: 0,
    data: {
      method: "POST",
      url: "http://foo.bar.com/files/27",
    },
    msg: "",
  };
  res.send(JSON.stringify(retObj));
});

app.post("/v3/3rd/files/:file_id/upload/complete", (req, res) => {
  const retObj = {
    code: 0,
    data: {
      create_time: 1670218748,
      creator_id: "404",
      id: "EOCVQPCDCCE4ZJ2X6MTF",
      modifier_id: "404",
      modify_time: 1670328304,
      name: "test.xlsx",
      size: 18961,
      version: 180,
    },
  };
  res.send(JSON.stringify(retObj));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
