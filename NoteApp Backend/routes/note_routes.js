const express = require("express");
const noteRouter = express.Router();
const pool = require("../pool");
const jwt = require("jsonwebtoken");

const { authenticator } = require("../middlewares/authenticator");
noteRouter.use(authenticator);

noteRouter.post("/fetchallnotes", (req, res) => {
  const token = req.headers.authorization || req.body.token;
  console.log('>>>>>>>>>>>>>>><><', token);
  jwt.verify(token, "archit", (err, decode) => {
    pool.query(
      "select * from notesdata where user=?",
      [decode.userId],
      function (error, data) {
        if (error) {
          res.send({ message: error.message, status: 0 });
        } else {
          console.log('qqqqqqqqqqqqqqqqqqqqq', data);
          res.send({ data: data, message: "Success", status: 1 });
        }
      }
    );
  });
});

noteRouter.post("/create", (req, res) => {
  const token = req.headers.authorization;
  jwt.verify(token, "archit", (err, decode) => {
    pool.query(
      "insert into notesdata(title, body, user) values(?, ?, ?)",
      [req.body.title, req.body.body, decode.userId],
      function (error, result) {
        if (error) {
          res.send({ message: error.message, status: 0 });
        } else {
          res.send({ message: "Note created", status: 1 });
        }
      }
    );
  });
});

noteRouter.delete("/", (req, res) => {
  let { id } = req.headers;
  pool.query(
    "delete from notesdata where noteid=?",
    [id],
    function (error, result) {
      if (error) {
        res.send({ message: error.message, status: 0 });
      } else {
        res.send({ message: "Note deleted", status: 1 });
      }
    }
  );
});

noteRouter.put("/", (req, res) => {
  let { id } = req.headers;
  pool.query(
    "update notesdata set title=?, body=? where noteid=?",
    [req.body.title, req.body.body, id],
    function (error, result) {
      if (error) {
        res.send({ message: error.message, status: 0 });
      } else {
        res.send({ message: "Note updated", status: 1 });
      }
    }
  );
});

module.exports = { noteRouter };
