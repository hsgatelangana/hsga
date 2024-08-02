const express=require("express");
const router=express.Router({mergeParams:true});
const multer  = require('multer');
const {storage}=require("../cloudConfig.js");
const upload=multer({storage});

router.route("/")
    .get((req,res)=>{
    res.render("hsga/index.ejs");
})

router.route("/history")
    .get((req,res)=>{
    res.render("hsga/history.ejs");
})

router.route("/membership")
    .get((req,res)=>{
    res.render("hsga/membership.ejs");
})

router.route("/mission")
    .get((req,res)=>{
    res.render("hsga/mission.ejs");
})

router.route("/prashikshamyojna")
    .get((req,res)=>{
    res.render("hsga/pryojna.ejs");
})

router.route("/stateteam")
    .get((req,res)=>{
    res.render("hsga/team.ejs");
})

router.route("/nationalteam")
    .get((req,res)=>{
    res.render("hsga/nationalteam.ejs");
})


router.route("/photo_gal")
    .get((req,res)=>{
    res.render("hsga/photo_gal.ejs");
})

router.route("/video_gal")
    .get((req,res)=>{
    res.render("hsga/video_gal.ejs");
})

router.route("/careers")
    .get((req,res)=>{
    res.render("hsga/careers.ejs");
})

router.route("/news")
    .get((req,res)=>{
    res.render("hsga/news.ejs");
})

router.route("/contact")
    .get((req,res)=>{
    res.render("hsga/contact.ejs")
})

router.route("/aims")
    .get((req,res)=>{
    res.render("hsga/aims.ejs");
})

module.exports=router;
