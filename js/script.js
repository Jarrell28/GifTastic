var topics = ["dogs", "cats", "fish", "bird"];

topics.forEach(function (topic) {
    $("#topics").append("<span class='badge badge-pill badge-info' data-topic='" + topic + "'>" + topic + "</span>");
});




var API_KEY = "AEcrIDQZBfcf8ogKoXMtc4w1sI0H8imE";
var limit = "10";
var query = "dogs";
var rating = "";
var URL = "https://api.giphy.com/v1/gifs/search?q=" + query + "&limit=" + limit + "&rating=" + rating + "&api_key=" + API_KEY;

$("#topics").on("click", ".badge", function () {

    $("#topic-gifs").empty();

    query = $(this).attr("data-topic");
    URL = "https://api.giphy.com/v1/gifs/search?q=" + query + "&limit=" + limit + "&rating=" + rating + "&api_key=" + API_KEY;

    $.ajax({
        url: URL,
        type: "GET"
    }).then(function (response) {
        console.log(response);

        response.data.forEach(function (data) {
            var image = data.images.fixed_height.url;

            $("#topic-gifs").append("<img src='" + image + "' alt='' class='img-thumbnail'>");
        })

    })
})

