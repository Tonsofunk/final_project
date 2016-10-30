window.formHtmlTemplate = function(){
	var html = '<form class="form">' +
	'<div class="clearfix">' +	
		'<div class="form_right">' +
			'<div class="form_row">' +
				'<label>Scripts</label>' +
				'<select name="selectAddOns" multiple>' +
					'<option></option>' +
					'<option value="website">Web Feeds(ex. rates)</option>' +
					'<option value="news">News</option>' +
		   		 	'<option value="weather">Weather</option>' +
			      	'<option value="facebook">Facebook</option>' +
				  	'<option value="twitter">Twitter</option>' +
					'<option value="instagram">Instagram</option>' +
				'</select>' +
			'</div>' +
		'</div>' +
		'<div class="form_left">' +
			'<div class="form_row">' +
				'<label>Location: <input type="text" class="location"></label>' +
			'</div>' +
			'<div class="form_row">' +
				'<label>Type Of Content: <input type="text" class="content"></label>' +
			'</div>' +
			'<div class="form_row">' +
				'<label class="clearfix">Display:' +
						'<select class="display" data-placeholder="Display">' +
							  '<option></option>' +
							  '<option value="landscape">Landscape</option>' +
							  '<option value="portrait">Portrait</option>' +
						'</select>' +
				'</label>' +
			'</div>' +
			'<div class="form_row">' +
				'<label>Playlist Type: <input type="text" class="playlist"></label>' +
			'</div>' +
			'<div class="form_row">' +
				'<label>Channel Layout: <input type="text" class="layout"></label>' +
			'</div>' +
		'</div>' +
	'</div>' +
	'<div class="preview">' +
		'<div class="view">' +
			'<input type="submit" class="generate" value="Generate Preview">' +
			'<input type="submit" class="delete" value="Delete">' +
		'</div>'	
	'</div>' +
'</form>';
return html;
};


