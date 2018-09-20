//declare global variables

const baseUrl = `http://api.nytimes.com/svc/search/v2/articlesearch.json?`;
const apiKey = `45564cc502eb498f9245275f1fd5cc33`;

//html Ids: term, records, start-year, end-year, search, clear
//query parameters: q - search term; page - number of results; begin_date - start year; end_date - end year
let param = {
  search: {
    handle: "#term",
    queryKey: 'q='
  },
  number: {
    handle: "#records",
    queryKey: 'page='
  },
  startYear: {
    handle: "#start-year",
    queryKey: 'begin_date='
  },
  endYear: {
    handle: "#end-year",
    queryKey: 'end_date'
  }
};

const query = {
  buildUrl: function(){
    let queryTail = "";
    let parametersList = [];
    for (let par in param) {
      parametersList.push(par);
    }
    console.log(parametersList);
    for (let par of parametersList) {
      let inputValue = $(param[par].handle).val().trim()
      if (inputValue == "" ) {}
      else{
        queryTail += param[par].queryKey + $(param[par].handle).val().trim() + '&'
      }
    }
    console.log(baseUrl + queryTail + 'apikey=' + apiKey);
    return baseUrl + queryTail + 'apikey=' + apiKey;
  },
  emptyDivs: function(){

  }
  }
;

$(document).ready(function() {
  $("#search").on("click", function (event) {
    event.preventDefault();
    let queryURL = query.buildUrl();
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response)
    })
  })


});