var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
// var db = require('../models');

// cheerios 
var cheerio = require("cheerio");
// axios is used to send the res as a ajax 
var axios = require("axios");
// getting schema 
var db = require("./../models");


// router.get("*", function (req, res) {
//  res.render('index');
// });
router.get("/", function(req, res) {
    res.render('index');
});
// this is the saved artilces 
router.get("/saved", function(req, res){
    res.render('saved');
});

router.post("/scrape", function(req, res) {
// scrape
//this route will go to the Stnace Nation website and pull the nessary data from the page 
// then will add those in to the results array 
// which then will be added to the correct columns via mongoose useing the Acticle model

    // // request to grap the page
    // axios("http://www.stancenation.com/topics/car-features/", function(error, response, html) {

    //     // Load the HTML into cheerio and save it to a variable
    //     var $ = cheerio.load(response.data);

    //     // arrat to save article
    //     var results = [];
    //     // grpaing meta tag from stnace nation 
    //     $("div.cb-meta").each(function(i, element) {
    //         var title = $(element).find("h2.cb-post-title").text();
    //         // var imgLink = $(element).find("a")find("img").attr().split(",")[0].split(" ")[0];
    //         var summary = $(element).find("div.cb-excerpt").text();
    //         var link = $(element).children().attr("href");


    //         // pushing to results 
    //         results.push({
    //             title,
    //             summary,
    //             link
    //         });

    // bs results bs i cant get scrape to work
     results = [
     {
        title: "bryant",
        summary: "can't believe im haveing this much trouble",
        link: "www.google.com"
     },
     {
        title: "dawson",
        summary: "scraping wasnt this hard couple days ago :(",
        link: "www.google.com"
     }
     ]


            db.Article.create(results)
                .then(function(dbArticle) {
                    console.log(dbArticle);
                })
                .catch(function(err) {
                    return res.json(err);
                });
        res.send("scrape done");
        console.log(results);
            });
   // });
// });

router.get("/artilce", function(req, res){
    // display
    // this route will go to the data base and pull the data that was just pushed and display 20 of them on the page in the artilces div 
    // this will need to use db.artice.find({}) 
    // send that to the clent so that it can be displaied 
});
// this is going to be for saving the artilce 
router.get("/artilce:id", function (req, res){
    //this is what is going to mark the article as saved 
    
});
// this is going to be for creating a note 
router.post("/artilce:id", function (req, res){

});
// this will be for editing the note

// then we need one more to delete the note 

module.exports = router;