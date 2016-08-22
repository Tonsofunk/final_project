$(document).ready(function(){
	$('select').select2();
	$( ".add" ).click(function() {
	  $(".innerwrapper").animate( {opacity: 1}, 500);
	$(".innerwrapper").clone().appendTo("#wrapper");
	});

	$("#generate").click(function() {
		alert("hey!");
	});

});

//$( ".add" ).click(function() {
//		$(".innerwrapper").load("snippet.html", function() {
//			alert("load was performed.");