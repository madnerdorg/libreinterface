//Append to url and refresh page - Source:http://stackoverflow.com/questions/5997450/append-to-url-and-refresh-page
function add_params(url, param, value){
	var hash       = {};
	var parser     = document.createElement('a');

	parser.href    = url;

	var parameters = parser.search.split(/\?|&/);

	for(var i=0; i < parameters.length; i++) {
		if(!parameters[i])
			continue;

		var ary      = parameters[i].split('=');
		hash[ary[0]] = ary[1];
	}

	hash[param] = value;

	var list = [];  
	Object.keys(hash).forEach(function (key) {
		list.push(key + '=' + hash[key]);
	});

	parser.search = '?' + list.join('&');
	return parser.href;
}
//Get url parameter jquery Or How to Get Query String Values In js - Source : http://stackoverflow.com/questions/19491336/get-url-parameter-jquery-or-how-to-get-query-string-values-in-js
var getUrlParameter = function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
	sURLVariables = sPageURL.split('&'),
	sParameterName,
	i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}

};

//JavaScript Popup Boxes - Source: http://www.w3schools.com/js/js_popup.asp
function change_app(value){
	location.href = add_params(window.location.href,"app",value);
}