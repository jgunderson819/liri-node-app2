requestAnimationFrame("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");
var spotify = new spotify(keys.spotify);
var fs = require("fs");
var moment = require(`moment`)
var artist = "";
var concert="";
var song="";
var movie="";
var dowhat="";
var variable =process.argv[3]
var statement=process.arv[2]
var errorfunction= function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  }






function(concert-this){
if artist="" { console.log("")}
else{
// Then run a request with axios to the Bands in Town API with the artist specified
axios.get(`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`).then(
  function(response) {
    console.log("Name of Venue " + response.data.venue);
    console.log("Venue Location is " + response.data.address);
    console.log("Date of the Event "+ response.data.date)
  })
  .catch(function(error) {
    errorfuntion
})}}


function(spot){
    if artist="" { console.log("")}
    else{
    // Then run a request with axios to the Bands in Town API with the artist specified
    axios.get(`"https://api.spotify.com/v1/artists" + artist + "/events?app_id=codingbootcamp"`).then(
      function(response) {
        console.log("Name of Venue " + response.data.venue);
        console.log("Venue Location is " + response.data.address);
        console.log("Date of the Event "+ response.data.date)
      })
      .catch(function(error) {
        errorfuntion
    })}}

    function(mdb){
        if movie="" { console.log("")}
        else{
            axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
                function(response) {
                  console.log("Title: " + response.data.title);
                  console.log("Year: " + response.data.Year);
                  console.log("The movie's rating is: " + response.data.imdbRating);
                  console.log("The movie's rating is: " + response.data.Ratings.Source="Rotten Tomatoes".Value);
                  console.log("Country: " + response.data.Country);
                  console.log("Language: " + response.data.Language);
                  console.log("Plot: " + response.data.Plot);
                  console.log("Actors: " + response.data.Actors);
                })
          .catch(function(error) {
            errorfuntion
        })}}

        function(do-what-it-says){
            if dowhat="" { console.log("")}
            else{
            // Then run a request with axios to the Bands in Town API with the artist specified
            axios.get(`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`).then(
              function(response) {
                console.log("Name of Venue " + response.data.venue);
                console.log("Venue Location is " + response.data.address);
                console.log("Date of the Event "+ response.data.date)
              })
              .catch(function(error) {
                errorfuntion
            })}}