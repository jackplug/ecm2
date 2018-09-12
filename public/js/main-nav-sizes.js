(function () {
	var navElements = document.querySelectorAll('.navigation-primary-subcategory'),
		cols;

	for (var i = 0, neLen = navElements.length; i < neLen; i++ ) {
		var subNavElements = navElements[i].parentNode.querySelectorAll('.navigation-primary-subcategory > ul > li > ul'),
			promo = navElements[i].querySelector('.navigation-primary-promo');

		cols = 1;

		// if (subNavElements.length > 1) {
		// 	cols++;
		// }

		if (subNavElements.length > 3) {
			cols++;
		}

		if (subNavElements.length > 5) {
			cols++;
		}
console.log('promo', promo);
		if (promo) {
			cols++;
		}

		navElements[i].style.setProperty('--cols', cols);
	}
})();