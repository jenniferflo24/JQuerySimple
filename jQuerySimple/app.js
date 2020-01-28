let ul = $("<ul></ul>");
$('body').append(ul);

$("#btnSubmit").click(function () {
    alert("Help Me Code");
});

$("form").submit(function () {
    var text = $("#message").val();
    alert(text)

    $("#btnSubmit").prop("disabled", true);
});

$("<div></div>").appendTo("body")
$('#btnSubmit').click(function () {
    event.preventDefault();
    let li = $('<li></li>');
    li.text($('#message').val());
    ul.append(li);

    $(li).click(function () {
        $(li).css({
            "color": getRandomColor(),
        });
    });

    $(li).dblclick(function() {
        $(li).remove(li);
    });

    // $('<h2>' + $('#message').val() + '</h2>').appendTo('div')
    // $("<lu></lu>").appendTo("div")
    // $('h2').mouseover(function () {
    //     // $('h2').css("background", "green")
    //     $("h2").css({
    //         "background-color": getRandomColor(),
    //         "border-radius": "5px"
    //     });
    // })


})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



