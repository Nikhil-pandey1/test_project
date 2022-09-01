$(() => {
    // click function and taking all the values of userid and title and completed checkbox in an object
    $("button").click(function () {
        var record = {
            userid: $("#userid").val(),
            title: $("#title").val(),
            completed: $("#completed").val()
        }

        // // a jQuery POST request to the mentioned URL
        $.post("https://jsonplaceholder.typicode.com/todos", record, function (params) {
            console.log(params)
            $("#msg").html(`User <b>${params.userid} with id=${params.id}</b> added successfully`)
        });
    })
});
