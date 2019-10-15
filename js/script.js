var topics = ["dogs", "cats", "fish", "bird"];

var API_KEY = "AEcrIDQZBfcf8ogKoXMtc4w1sI0H8imE";
var limit = "";
var query = "dogs";
var rating = "";
var URL = "https://api.giphy.com/v1/gifs/search?q=" + query + "&limit=" + limit + "&rating=" + rating + "&api_key=" + API_KEY;

$.ajax({
    url: URL,
    type: "GET"
}).then(function (response) {
    console.log(response);
})