$.get(chrome.extension.getURL("/jquery-1.12.0.js"), 
	function(data) {
		var script = document.createElement("script");
		script.setAttribute("type", "text/javascript");
		script.innerHTML = data;
		document.getElementsByTagName("head")[0].appendChild(script);
	}
);
$.get(chrome.extension.getURL('/orna-0.3.2.js'), 
	function(data) {
		var script = document.createElement("script");
		script.setAttribute("type", "text/javascript");
		script.innerHTML = data;
		document.getElementsByTagName("head")[0].appendChild(script);
	}
);