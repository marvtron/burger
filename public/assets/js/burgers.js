// Make sure that we wait to attach our handlers until the DOM is fully loaded
$(function() {
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");

        var newState = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
        })

        .then(function() {
            console.log("changed devour to", true);
            location.reload();
        });
    });
});

$(".create-form").on("submit", function(event) {
    event.preventDefault();

    var name = $("#name").val().trim();

    if(name !== "") {
        var newBurger = {
            name: name
        };

        //Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        })

        .then(function() {
            console.log("created new burger!");
            location.reload();
        });

    } else {
        console.log("didnt work");
        $("[name=burger-name]").val("");
    }
});

$(".delete-sleep").on("click", function(event) {
    var id = $(this).data("id");

    $.ajax("/api/burgers" + id, {
        type: "DELETE"
    })

    .then(function() {
        location.reload();
    });
});
