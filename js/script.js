var topics = ["Martin Lawrence", "Dave Chappelle", "Jim Carrey", "Bernie Mac", "Kevin Hart", "Eddie Murphy", "Lavell Crawford", "Chris Rock", "Bill Burr"];

topics.forEach(function (topic) {
    $("#topics").append("<a href='#' class='badge badge-warning d-inline-block m-1 ' data-topic='" + topic + "'>" + topic + "</a>");
});


var API_KEY = "AEcrIDQZBfcf8ogKoXMtc4w1sI0H8imE";
var limit = "10";
var query = "";
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

    if ($("#add-topic").val() != "" && !topics.includes($("#add-topic").val())) {

        topics.push($("#add-topic").val().trim());

        $("#topics").empty();

        topics.forEach(function (topic) {
            $("#topics").append("<a href='#' class='badge badge badge-warning d-inline-block m-1' data-topic='" + topic + "'>" + topic + "</a>");
        });
    }
})

$("#topic-gifs").on("click", ".gifs", function () {
    if ($(this).data("state") === "still") {
        $(this).attr("src", $(this).data("animated"));
        $(this).data("state", "animated");
    } else {
        $(this).attr("src", $(this).data("still"));
        $(this).data("state", "still");
    }


});

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

            $("#topic-gifs").append("<div><p class='bg-warning p-2'>Rating: " + gifRating + "</p><img class='gifs' src='" + stillImage + "' data-state='still' data-animated='" + animatedImage + "' data-still='" + stillImage + "' alt='' class= 'img-thumbnail' ></div> ");
        })

    })
}