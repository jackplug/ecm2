var tickerItems = document.querySelectorAll('.rolling-list-pane > *'),
	firstTickerItem = tickerItems[0],
	lastTickerItem = tickerItems[tickerItems.length - 1],
	processTransitionEnd = function (event) {
		var element = event.target,
			classes = element.classList;

		if (!/transform/.test(event.propertyName)) {
			return;
		}
		
		if (classes.contains('rolling-list-pane-start')) {
			element.classList.remove('rolling-list-pane-start');
			element.classList.add('rolling-list-pane-end');
			return;
		}
		
		if (classes.contains('rolling-list-pane-end')) {
			element.classList.remove('rolling-list-pane-end');
			if (element === lastTickerItem) {
				firstTickerItem.classList.add('rolling-list-pane-start');
			} else {
				element.nextElementSibling.classList.add('rolling-list-pane-start');
			}
			return;
		}
	};

tickerItems.forEach(function(tickerItem, i) {
	if (i === 0) {
		tickerItem.classList.add('rolling-list-pane-start');
	}
	tickerItem.addEventListener('transitionend', processTransitionEnd);
});
