$(document).ready(function(){

    $('select').select2();

    $( ".add" ).click(function() {
        $("<div/>").addClass("form").appendTo(".innerwrapper");
        $(".innerwrapper").html(window.formthtmltemplate);
         $(".innerwrapper").animate( {opacity: 1}, 500);
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
