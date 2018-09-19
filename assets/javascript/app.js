//declare global variables

const baseUrl = `http://api.nytimes.com/svc/search/v2/articlesearch.json?`;
const apiKey = `45564cc502eb498f9245275f1fd5cc33`;

//html Ids: term, records, start-year, end-year, search, clear
//query parameters: q - search term; page - number of results; begin_date - start year; end_date - end year

let search = $("#term").val().trim();
let number = $("#records").val().trim();
let startYear = $("#start-year").val().trim();
let endYear = $("end-year").val().trim();

$(document).ready(function(){
  let queryURL = `${baseUrl}q=${$("#term").val().trim()}&apikey=${apiKey}`;
    $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response)
    })
});