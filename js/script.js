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

    query = $(this).attr("data-topic");

    displayGifs(query);
})

$("#limit").on("change", function () {
    limit = $(this).val();
    displayGifs(query);
});

$("#submit-topic").on("click", function (e) {
    e.preventDefault();

    topics.push($("#add-topic").val().trim());

    topics.forEach(function (topic) {
        $("#topics").append("<span class='badge badge-pill badge-info' data-topic='" + topic + "'>" + topic + "</span>");
    });
})

function displayGifs(query) {
    $("#topic-gifs").empty();

    URL = "https://api.giphy.com/v1/gifs/search?q=" + query +
        "&limit=" + limit + "&rating=" + rating + "&api_key=" + API_KEY;

    $.ajax({
        url: URL,
        type: "GET"
    }).then(function (response) {
        console.log(response);

        response.data.forEach(function (data) {
            var stillImage = data.images.fixed_height_still.url;
            var animatedImage = data.images.fixed_height.url;
            var gifRating = data.rating;

            $("#topic-gifs").append("<div><p class='bg-warning p-2'>Rating: " + gifRating + "</p><img class='gifs' src='" + stillImage + "' data-state='still' data-animated='" + animatedImage + "' data-still='" + stillImage + "' alt='' class= 'img-thumbnail' ></div > ");
        })

    })
}