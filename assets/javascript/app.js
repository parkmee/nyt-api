//declare global variables

const baseUrl = `http://api.nytimes.com/svc/search/v2/articlesearch.json?`;
const apiKey = `45564cc502eb498f9245275f1fd5cc33`;

//html Ids: term, records, start-year, end-year, search, clear
//query parameters: q - search term; page - number of results; begin_date - start year; end_date - end year

$.ajax({
  url: `${baseUrl}q=${$("#term").val().trim()}&apikey=${apiKey}`,
  method: 'GET'
}).then(response => console.log(response));
