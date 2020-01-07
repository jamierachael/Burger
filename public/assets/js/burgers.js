// Jamie Morris
// Homework-11  Eat-Da-Burger!

// Click event to devour: 
$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");

        var newDevouredState = {
            devoured: devoured
        };

        // PUT request:
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to", devoured);
                // Reload the page to get the updated list: 
                location.reload();
            }
        );
    });
    // Submit Click event:
    $(".create-form").on("submit", function (event) {
        // PreventDefault on a submit event: 
        event.preventDefault();
        var newBurger = {
            burger_name: $("#ca").val().trim(),
            devoured: false
        };
        console.log(newBurger.burger_name)
        // POST request:
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                // Reload the page to get the updated list: 
                location.reload();
            }
        );
    });

    // Delete event
    // Not working 
    // $(".delete-burger").on("click", function (event) {
    //     var id = $(this).data("id");

    //     // Send the DELETE request.
    //     $.ajax("/api/burger/" + id, {
    //         type: "DELETE"
    //     }).then(
    //         function () {
    //             console.log("deleted burger", id);
    //             // Reload the page to get the updated list
    //             location.reload();
    //         }
    //     );
    // });

});
