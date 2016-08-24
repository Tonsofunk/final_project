window.formhtmltemplate = function(){
	var html = '<div class="form">' +
	'<div class="scripts">' +
		'<h3>Scripts</h3>' +
		'<form action="form_action.asp">' +
				'<select name="selectAddOns" multiple>' +
					'<option></option>' +
					'<option value="news">News</option>' +
		   		 	'<option value="weather">Weather</option>' +
			      	'<option value="facebook">Facebook</option>' +
				  	'<option value="twitter">Twitter</option>' +
					'<option value="instagram">Instagram</option>' +
				'</select>' +
				'<br>' +
				'<input type="submit" id="submit">' +
		'</form>' +
	'</div>' +

	'<div class="info">' +
		'<h3>Location: <input typtext" Id="location"></h3>' +
		'<h3>Type Of Content: <input type="text" Id="content"></h3>' +
		'<h3 class="clearfix">Display:' +
				'<select id="display" data-placeholder="Display">' +
					  '<option></option>' +
					  '<option value="Landscape">Landscape</option>' +
					  '<option value="portrait">Portrait</option>' +
				'</select>' +
		'</h3>' +
		'<h3>Playlist Type: <input type="text" Id="playlist"></h3>' +
		'<h3>Orientation: <input type="text" Id="layout"></h3>' +
		'</div>' +

	'<div class="preview">' +
		'<button id="generate">Generate Preview' +
		'</button>' +
		'<div id="preview">' +
			'<div class="portrait"></div>' +
			'<div class="landscape"></div>' +
		'</div>' +
	'</div>' +
'</div>';
return html;
};

