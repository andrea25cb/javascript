$(function() {
    $("#boton").on("click", function() {
        $('#myList li').each(function(idx, el) {
            console.log(
                'El elemento ' + idx +
                ' contiene el siguiente HTML: ' +
                $(el).html()
        ); });
        
    });

});
