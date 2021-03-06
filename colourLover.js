const Color = {
	COLOUR_LOVER_URL: 'http://www.colourlovers.com/api/palettes?',
	getDataFromApi: function(hex, callback) {
		// do I need this?
		// if (typeof hex === undefined) {	
		// 	hex = '';
		// }
		query = {
			hex: hex,
			numResults: 1,
			format: 'json',
		}
		$.getJSON(Color.COLOUR_LOVER_URL, query, callback);
	},
	findApiData: function() {
		$('.submitBtnColor').click(function() {
			getDataFromApi(undefined, Color.collectApiData);	
		});
	},
	collectApiData: function(data) {
		console.log('data:', data);
		let apiDataLength = data.items.length;
		console.log('apiDataLength:', apiDataLength);
		randomNumberGenerator(apiDataLength);
	},
	setup: function() {
		Color.findApiData();	
	},
}
$(Color.setup);


// function randomNumberGenerator(length) {
// 	let randomNumber = Math.floor(Math.random() * length + 1);
// 	console.log('randomNumber:', randomNumber);
// }

