if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

const express=require("express");
const router=express.Router({mergeParams:true});
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");
const port=8080;
const session=require("express-session");
const flash=require("connect-flash");
const hsgaRouter=require("./routes/hsga")
app.use(methodOverride("_method"))
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,"/public")));
app.engine("ejs",ejsMate)

app.use("/",hsgaRouter)

app.listen(port,()=>{
    console.log("Listening to 8080");
})