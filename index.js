const PORT = 5500;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute")
require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://adesanyaboluwatife29:ac1Q6ptUyyy3B0MX@cluster0.9dltpn7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(MONGO_URI).then(()=>{
    console.log("Database Connecte");
}).catch((err)=>{
    console.log("Database could not connect \n", err);
})

// ROUTES
app.use('/api', userRoute)
app.get("/", (req, res)=>{
    console.log("Route activated");
    // res.send().json({message: "Finally entered this route"})
    res.json({message: "Work na"})
    res.end()
})


app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`);
})