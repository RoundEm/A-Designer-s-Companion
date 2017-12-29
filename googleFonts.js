// 'sans-serif', 'serif', 'display', 'handwriting', 'monospace'

const Fonts = {
	GOOGLE_FONTS_URL: 'https://www.googleapis.com/webfonts/v1/webfonts?',
	getDataFromApi: function(fontCategory, callback) {
		if (typeof fontCategory === undefined) {
			fontCategory = '';
		}
		query = {
			key: 'AIzaSyB7PbYrAbLlXECLq5A9410fl6E_fTMA4n8',
			category: fontCategory,
		}
		$.getJSON(Fonts.GOOGLE_FONTS_URL, query, callback);
	},
	findApiData: function() {
		$('.submitBtnFont').click(function() {
			let fontCategoryArray = [];
			let $parentContainer = $(this).parent();
			let $selectedFonts = $parentContainer.find('input[type="checkbox"]');
			//loop through to find out which fonts are checked
			$selectedFonts.each(function(index) {
				if($(this).prop('checked')) {
					fontCategoryArray.push($selectedFonts[index].value);
				}
			});
			console.log('fontCategoryArray:', fontCategoryArray);
			Fonts.getDataFromApi(undefined, Fonts.collectApiData);	
		});
	},
	collectApiData: function(data) {
		console.log('data:', data);
		let apiDataLength = data.items.length;
		console.log('apiDataLength:', apiDataLength);
		Fonts.randomNumberGenerator(apiDataLength);
	},
	randomNumberGenerator: function(length) {
		let randomNumber = Math.floor(Math.random() * length + 1);
		console.log('randomNumber:', randomNumber);
	},
	setup: function() {
		Fonts.findApiData();
	},
}
$(Fonts.setup);