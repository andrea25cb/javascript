$(function() {
    $("#boton").on("click", function() {
       //$('#myList li:first').appendTo('#myList');
        $('#myList').append($('#myList li:first'));

    });

});
