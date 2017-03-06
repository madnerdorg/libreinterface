static = "json/applications.json";

//http://stackoverflow.com/questions/2313620/is-it-possible-to-retrieve-the-last-modified-date-of-a-file-using-javascript
function fetchHeader(url, wch) {
	try {
		var req=new XMLHttpRequest();
		req.open("HEAD", url, false);
		req.send(null);
		if(req.status== 200){
			return req.getResponseHeader(wch);
		}
		else return false;
	} catch(er) {
		return er.message;
	}
}

//http://www.hashbangcode.com/blog/convert-date-timestamp-javascript
function toTimeStamp(strDate){
	return(Date.parse(strDate));
}

function getDate(url){
	date = fetchHeader(url,"Last-Modified");
	date = toTimeStamp(date);
	date = date.toString();
	return date;
}


//inject_localStorage("json/getting-started.json");

date = getDate(static);

if(isNaN(date)){
	static_website = false;
	console.log("No static Site to load");
} else {
	static_website = true;
	if(localStorage.madnerd_static_date === undefined){
		console.log("Load static site");
		inject_localStorage(static);
		localStorage.setItem("madnerd_static_date",date);
		location.reload();
	}
	else{
		last_update = localStorage.getItem("madnerd_static_date",date);
		if(last_update !== date){
			inject_localStorage(static);
			localStorage.setItem("madnerd_static_date",date);
			//console.log(last_update);
			//console.log(date);
			//location.reload();
		} else {
			console.log("Last version loaded");
		}
	}
}