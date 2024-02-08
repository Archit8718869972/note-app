const express = require("express");
const userRouter = express.Router();
const pool = require("../pool");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

userRouter.post("/register", function (req, res) {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 5, function (err, hash) {
        if (err) return res.send({ message: "something went wrong", status: 0 });
        pool.query('insert into userdata(name, email, password) values(?, ?, ?)', [name, email, hash], function (error, result) {
            if (error) {
                res.send({ message: "something went wrong", status: 0 });
            }
            else {
                res.send({ message: "User created", status: 1 });
            }
        })
    })
})

userRouter.post("/login", function (req, res) {
    const { email, password } = req.body;
    console.log(req.body.email,req.body.password)
    let option = {
        expiresIn: "30m"
    }

    pool.query('select * from userdata where email=?', [email], function (error, data) {
        if (error) {
        
            res.send({ message: "something went wrong", status: 0 });
        }
        else {
            if (data.length > 0) {
                let token = jwt.sign({ userId: data[0].userid }, "archit", option);
                bcrypt.compare(password, data[0].password, function (err, result) {
                    if (err) return res.send({ message: "something went wrong" + err, status: 0 });
                    if (result) {
                        res.send({
                            message: "User logged in successfully",
                            token: token,
                            status: 1
                        });
                    } else {
                        res.send({
                            message: "Incorrect password",
                            status: 0
                        });
                    }
                });
            }
            else {
                res.send({
                    message: "User does not exist",
                    status: 0
                })
            }
        }
    });
});

module.exports = { userRouter };