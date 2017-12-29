const FONTS = {
	GOOGLE_FONTS_URL: 'https://www.googleapis.com/webfonts/v1/webfonts?',
	getDataFromApi: function(fontCategory, callback) {
		if (typeof fontCategory === undefined) {
			fontCategory = '';
		}
		query = {
			key: 'AIzaSyB7PbYrAbLlXECLq5A9410fl6E_fTMA4n8',
			category: fontCategory,
		}
		$.getJSON(FONTS.GOOGLE_FONTS_URL, query, callback);
	},
	findApiData: function() {
		$('.submitBtnFont').click(function() {
			FONTS.getDataFromApi(undefined, FONTS.collectApiData);	
		});
	},
	collectApiData: function(data) {
		console.log('data:', data);
		let apiDataLength = data.items.length;
		console.log('apiDataLength:', apiDataLength);
		FONTS.randomNumberGenerator(apiDataLength);
	},
	randomNumberGenerator: function(length) {
		let randomNumber = Math.floor(Math.random() * length + 1);
		console.log('randomNumber:', randomNumber);
	},
	setup: function() {
		FONTS.findApiData();
	},
}
$(FONTS.setup);