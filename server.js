const express = require('express');
const app = express();
const PORT = 8080;
const scrape = require('./controller/scraper.js');

app.get('/scrape', function(req, res){
    //call scrape function from controller/scraper.js
    scrape();
});



app.listen(PORT, function(){
    console.log("listening on 8080");
});