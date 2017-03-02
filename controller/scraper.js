const request = require('request');

module.exports = function(){

    // Scrapes our HTML
    var cheerio = require("cheerio");

// Run request to grab the HTML from awwards's clean website section
    request("https://www.talkbass.com/forums/basses-bg.8/", function(error, response, html) {

        // Load the HTML into cheerio
        var $ = cheerio.load(html);

        // Make an empty array for saving our scraped info
        var result = [];

        // With cheerio, look at each award-winning site, enclosed in "figure" tags with the class name "site"
        $("h3.title").each(function(i, element) {

            /* Cheerio's find method will "find" the first matching child element in a parent.
             *    We start at the current element, then "find" its first child a-tag.
             *    Then, we "find" the lone child img-tag in that a-tag.
             *    Then, .attr grabs the imgs src value.
             * So: <figure>  ->  <a>  ->  <img src="link">  ->  "link"  */
            var link = $(element).find("a").attr("href");
            var text = $(element).find("a").text();

            // Push the image's URL (saved to the imgLink var) into the result array
            result.push({ Link: "https://www.talkbass.com/" + link,
                          text: text});
        });

        // With each link scraped, log the result to the console
        console.log(result);
    });
};