$(function() {
    $("#boton").on("click", function() {
       $('#myList').append('<li>'+$('#opcion').val()+'</li>');
    });

});
