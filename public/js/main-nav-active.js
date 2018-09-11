/**
 * Add / remove a quick class on the doc root when navigation active
 */
(function () {
	var navElements = document.querySelectorAll('header .navigation-primary-list > li'),
		docRoot = document.querySelector('html');

	for (i = 0, neLen = navElements.length; i < neLen; i++ ) {
		navElements[i].addEventListener('mouseover', function () {
			docRoot.classList.add('main-nav-active');
		});

		navElements[i].addEventListener('mouseout', function () {
			docRoot.classList.remove('main-nav-active');
		});
	}
})();
