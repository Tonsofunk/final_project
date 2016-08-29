$(document).ready(function(){

    $('select').select2();

    $( "body" ).on('click', '.add', function(event) {
        event.preventDefault();
        $(".innerwrapper").append(window.formHtmlTemplate);
         $(".innerwrapper").animate( {opacity: 1}, 500);
    });

    $(".innerwrapper").on('submit', 'form', function(event){
        console.log(event);
        var $form = $(this);
        var option = $form.find(".display option:selected").val();
        event.preventDefault();

            if (option == "landscape") {
                var img = '<img src="img/BLOOMBERG.jpg">';
            } else if (option == "portrait"){
                var img = '<img src="img/portrait.jpg">';
            }
                 
            $form.find(".preview").append(img);
            
            if (option == "")
                alert("Please decide DISPLAY type.");
                // console.log($('option value').val());
    });

    $(".delete").click(function(){
    alert("The paragraph was clicked.");
    });

    $("input.delete").find();
    console.log("input.delete");

    $("body").keypress(function(e) {
        if (e.which == '13') {
            e.preventDefault();
            }
    });
        //$("<input>", ".delete").on('submit', 'form', function(event){
          //  $(".preview img").remove();
       //});
});


