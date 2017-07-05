/*

Manage LocalStorage Applications

*/

//Load application name from url (ex: index.html?app=leds)
app_name = getUrlParameter("app");


//If no application loaded we use index
if (app_name === undefined) {
	app_name = "index";
}

//We check available applications
if(localStorage.madnerd_apps === undefined){
	console.log("No application available");
	madnerd_apps = [];
}
else{
	madnerd_apps = JSON.parse(localStorage.getItem("madnerd_apps"));
}

//Check if an application exists to avoid duplicate
function check_if_app_exists(checked_app){
	for (var i in madnerd_apps){
		if(madnerd_apps[i] == checked_app){
			return true;
		}
	}
	return false;
}

//Add an application inside localStorage madnerd_apps
function add_application(){
	app_exists = check_if_app_exists(app_name);
	if(!app_exists){
		if(app_name !== "index"){
      console.log("Generate new application:" + app_name);
      madnerd_apps.push(app_name);
      localStorage.setItem("madnerd_apps",JSON.stringify(madnerd_apps));
    }
  }else{
    console.log(app_name + " saved");
  }
}

//Save code from application to localStorage (for ex:appname_code)
function save_application(){
	localStorage.setItem(app_name + "_code", custom_code_editor.getValue());
	add_application();
}

function save_currentState(){
    localStorage.setItem(app_name + "_code", $("#application").html());
}

//Load code from codemirror editor inside application
function load_application(){
	//console.log(custom_code_editor.getValue());
	$("#application").html(custom_code_editor.getValue());
	save_application();
}

//Remove an application
function remove_application(app_to_remove){
	var index = madnerd_apps.indexOf(app_to_remove);
	if(index != -1){
   madnerd_apps.splice( index, 1 );
   localStorage.setItem("madnerd_apps",JSON.stringify(madnerd_apps));
   localStorage.removeItem(app_to_remove+"_code");
   console.log("Removed: "+ app_to_remove);
 } else {
   if(app_to_remove == "index"){
    localStorage.removeItem(app_to_remove+"_code");
  }
}
}

//Load javascript variable inside application
function inject_html(html){
	$("#application").html(html);
}

//Inject an external file from the webserver
//This won't works on local page, and only on the same domain.
function inject_ext_html(link){
	$.get( link, function( data ) {
		inject_html(data);
	});
}

function inject_localStorage(link){
  $.get( link, function( backup ) {
    //backup = JSON.parse(data);
    //backup = data
    for (var key in backup){
      //console.log(backup);
     var value = decodeURIComponent(unescape(backup[key]));
     window.localStorage.setItem(key, value);
   }
 });

}

function inject_localStorage_and_restart(link){
  $.get( link, function( backup ) {
    //backup = JSON.parse(data);
    //backup = data
    for (var key in backup){
      //console.log(backup);
     var value = decodeURIComponent(unescape(backup[key]));
     window.localStorage.setItem(key, value);

   }
   location.reload();
 });
  
}

/* Local Storage Manager */

function upload_localStorage(){
  var t = document.createElement('div');
  var a = document.createElement('a');
  a.appendChild(document.createTextNode('X'));
  a.setAttribute('href', '#');

  a.style.position = 'absolute';
  a.style.top = '10px';
  a.style.right = '10px';
  a.style['text-decoration'] = 'none';
  a.style.color = '#fff';
  t.appendChild(a);
  a.onclick = function() {
    t.remove();
  };
  t.style.width = '50%';
  t.style.position = 'absolute';
  t.style.top = '25%';
  t.style.left = '25%';
  t.style['background-color'] = '#e24242';
  t.style['text-align'] = 'center';
  t.style.padding = '50px';
  t.style.color = '#fff';
  t.style['z-index'] = 10000;

  var l = document.createElement('input');
  l.setAttribute('type', 'file');
  l.setAttribute('id', 'fileinput');
  l.onchange = function(e) {
    t.remove();
    var f = e.target.files[0];
    if (f) {
      var reader = new FileReader();
      reader.onload = function(e) {
        fileLoaded = true;
        var text = e.target.result;
        var backup = "";
        try {
         backup = JSON.parse(text);
       }
       catch(event) {
         fileLoaded = false;
         alert("Failed to load file");
       }

       for (var key in backup){
         var value = decodeURIComponent(unescape(backup[key]));
         window.localStorage.setItem(key, value);
       }
       if(fileLoaded){
        location.reload();
      }
    };
    reader.readAsText(f);

  } else {
    alert('Failed to load file');
  }
};
a = document.createElement('h3');
a.appendChild(document.createTextNode('Upload localStorage'));
t.appendChild(a);
t.appendChild(l);
document.querySelector('body').appendChild(t);

}

function download_localStorage(){
  var backup = {};
  for (i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    backup[key] = escape(encodeURIComponent(value));
  }
  var json = JSON.stringify(backup);
  var base = btoa(unescape(encodeURIComponent(json)));
  var href = 'data:text/javascript;charset=utf-8;base64,' + base;
  var link = document.createElement('a');
  link.setAttribute('download', 'applications.json');
  link.setAttribute('href', href);
  document.querySelector('body').appendChild(link);
  link.click();
  link.remove();
}

function erase_localStorage(){
	localStorage.clear();
}