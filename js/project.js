$(document).ready(function(){

    $('select').select2();

    $( ".add" ).click(function() {
        // $(".innerwrapper").animate( {opacity: 1}, 500);
        // $(".innerwrapper").clone().appendTo("#wrapper");
        // $(".innerwrapper").load("snippet.html", function(response) {
        //     console.log(response);
        // });
        console.log(window.formHTML);
    });

    $("#generate").click(function() {
        alert("hey!");
    });

});
