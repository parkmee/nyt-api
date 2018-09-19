//declare global variables

const baseUrl = `http://api.nytimes.com/svc/search/v2/articlesearch.json?`;
const apiKey = `45564cc502eb498f9245275f1fd5cc33`;

//html Ids: term, records, start-year, end-year, search, clear
//query parameters: q - search term; page - number of results; begin_date - start year; end_date - end year

let parameters = {

  search: $("#term").val().trim();
  number: $("#records").val().trim();
  startYear: $("#start-year").val().trim();
// let endYear = $("#end-year").val().trim();

}
$(document).ready(function(){

  //set listener and AJAX return on search button click
  $("#search").on("click",function(event) {
    let queryURL = `${baseUrl}q=${search}&apikey=${apiKey}`;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response)
    })
  });

  //set listener and clear function on clear button click
  $("#clear").on("click",function(event){
    $("#term").val('');
    $("#records").val('');
  })

});