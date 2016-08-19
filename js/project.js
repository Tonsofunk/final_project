$(document).ready(function(){
	$('select').select2();
	$( ".add" ).click(function() {
	  $(".innerwrapper").animate( {opacity: 1}, 500);
	$(".add").clone().appendTo("#wrapper");
	});

	$(".add").click(function() {
		$(".innerwrapper").animate( {opacity: 1}, 500);
		//$("innerwrapper").clone().appendTo( {opacity: 1}, 500);
	});

	$("#generate").click(function() {
		alert("hey!");
	});

});