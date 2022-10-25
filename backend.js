const express = require('express');
require('colors');
const morgan = require ('morgan');
const dotenv = require('dotenv')
const connectDB = require('./config/config')
const app = express();
dotenv.config();
connectDB();
const path = require("path");
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/pizzas", require("./routes/pizzaRoutes"));
app.use("/api/users",require("./routes/userRoutes"));
app.use("api/orders",require("./routes/orderRoutes"));

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname, '/frontend/build')));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
    });
} else {
    app.get("/",(req,res) => {
        res.send("<h1>Hello from node server via nodemon</h1>");
    });
}



 
const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`Server running on ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`.bgMagenta.white);
});