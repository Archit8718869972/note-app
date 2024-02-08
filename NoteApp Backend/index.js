const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const port = process.env.PORT;

const { userRouter } = require("./routes/user_routes");
const { noteRouter } = require("./routes/note_routes");

app.use(cors());
app.use(express.json());
app.use('/user', userRouter);
app.use('/note', noteRouter);


app.listen(port, () => {
    console.log("SERVER IS RUNNING ON PORT NUMBER", port);
});