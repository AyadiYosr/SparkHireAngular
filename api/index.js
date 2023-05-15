const express = require("express");
const mongoose = require("mongoose");

const authRoutes = require('./routes/auth');

var cors = require('cors');
const app = express();

app.use(express.json()); //application/json

app.use(cors());



app.use('/auth', authRoutes);

app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});

mongoose.connect('mongodb+srv://seifessoui:seif123@cluster0.hsta0yt.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(app.listen(process.env.PORT || 3000, console.log("Server started !")))
    .catch(err => console.log(err));





