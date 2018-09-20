/**
 * Add / remove a quick class on the doc root when navigation active
 */
(function () {
	var navElements = document.querySelectorAll('header .navigation-primary-list > li'),
		navTrigger = document.getElementById('NavPrimaryTrigger'),
		docRoot = document.querySelector('html');

	for (var i = 0, neLen = navElements.length; i < neLen; i++ ) {
		navElements[i].addEventListener('mouseover', function () {
			docRoot.classList.add('main-nav-active');
		});

		navElements[i].addEventListener('mouseout', function () {
			if (!navTrigger.offsetHeight) {
				docRoot.classList.remove('main-nav-active');
			}
		});
	}

	// Add class on trigger active state
	navTrigger.onchange = function (event) {
		if (event.target.checked) {
			docRoot.classList.add('main-nav-active');
		} else {
			docRoot.classList.remove('main-nav-active');
		}
	};
})();
