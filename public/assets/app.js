$(document).on("ready", function () {
    $("#submit").on("click", function (e) {
        e.preventDefault();

        var burger_name = $("input[name='name']").val();
        var devoured = $("input[name='devoured']").prop("checked") ? 1 : 0
        var data = {
            burger_name,
            devoured
        }

        $.post("/api/burgers", data)
            .then(function (response) {
                console.log(response)
                location.reload()
            })
    })
})