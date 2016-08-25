$(document).ready(function(){

    $('select').select2();

    $( "body" ).on('click', '.add', function() {
        $(".innerwrapper").append(window.formHtmlTemplate);
         $(".innerwrapper").animate( {opacity: 1}, 500);
        // $(".innerwrapper").clone().appendTo("#wrapper");
        // $(".innerwrapper").load("snippet.html", function(response) {
        //     console.log(response);
        // });
        console.log(window.formHTML);
    });

    $("body").on('submit', 'form', function(event){
        event.preventDefault();
        alert("We have added your script information to the client record");
    });

    //

    $(".innerwrapper").on('#generate', function(event){
        event.preventDefault();
        alert("We have added your script information to the client record");
        console.log(window.formHTML);
    });


    //  if input value == landscape 
            //show landscape

    //$("img .current").removeClass("current");
        //$(this).addClass("current");

       // if input value == portrait 
         //   show portrait
    //});
});
