(function () {
	var navElements = document.querySelectorAll('.navigation-primary-subcategory'),
		cols;

	for (var i = 0, neLen = navElements.length; i < neLen; i++ ) {
		var subNavElements = navElements[i].parentNode.querySelectorAll('.navigation-primary-subcategory > ul > li > ul'),
			promo = navElements[i].querySelector('.navigation-primary-promo');

		cols = subNavElements.length || 1;

		if (promo) {
			cols++;
		}

		if (cols > 4) {
			cols = 4;
		}

		navElements[i].style.setProperty('--cols', cols);
	}
})();