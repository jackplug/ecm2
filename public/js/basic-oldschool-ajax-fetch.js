function getFile(filename, className) {
	if (!filename) {
		return;
	}

	var ajax = new XMLHttpRequest();
	ajax.open('GET', filename, true);
	ajax.send();
	ajax.onload = function(e) {
  		var div = document.createElement('div');
  		if (className) {
  			div.className = className;
  		}
  		div.innerHTML = ajax.responseText;
  		document.body.insertBefore(div, document.body.childNodes[0]);
	}
}