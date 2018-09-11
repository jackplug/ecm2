/**
 * Sets an inline CSS Custom Property on <html> to the width of the scrollbar
 */
(function () {
	var currentWindowWidth = window.outerWidth,
		previousScrollbarWidth = 0,
    	resizeHandler = _debounce(function () {
    		currentWindowWidth = window.outerWidth;
			requestAnimationFrame(updateScrollCustomProperty);
    	}, 250);

	function updateScrollCustomProperty() {
		var html = document.querySelector('html'),
			documentWidth = html.offsetWidth,
			scrollbarWidth = currentWindowWidth - documentWidth;

		if (scrollbarWidth !== previousScrollbarWidth) {
			html.setAttribute('style', '--scrollbar-width:' + scrollbarWidth + 'px');
			previousScrollbarWidth = scrollbarWidth;
		}
	}

	// source: https://davidwalsh.name/javascript-debounce-function
	function _debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	}

	window.addEventListener('resize', resizeHandler);
	updateScrollCustomProperty();
})();
