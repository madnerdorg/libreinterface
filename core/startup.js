/*
Startup scripts for code editor

// Prepare CodeMirror
// Prepare Menu generated using localStorage
// Check if this is a mobile/desktop computer
*/

//We generate a codeMirror at startup
$(document).ready(function(){
  var mixedMode = {
   name: "htmlmixed"
 };
 custom_code_editor = CodeMirror(document.getElementById('code-editor'),{
  mode: mixedMode,
  theme: "zenburn"
});

  custom_code_editor.setSize("100%","100%");
  //Append Menu
  for (var i in madnerd_apps){
    menu_item_html = '<a href="?app='+madnerd_apps[i]+'" id="app_'+madnerd_apps[i]+'" class="item">'+madnerd_apps[i]+'</a>';
    $("#appmenu").append(menu_item_html);
    //console.log(madnerd_apps[i]);
  }
  //Make application item active
  $("#app_"+app_name).addClass("active");  
  
  //Inject application from local storage
  if(localStorage[app_name+"_code"] !== undefined){
    console.log("Load: "+app_name);
    inject_html(localStorage[app_name+"_code"]);
  } else {
    console.log("Nothing to load...");
  }
  
});


// Detect phone : http://stackoverflow.com/questions/6666907/how-to-detect-a-mobile-device-with-javascript
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  isComputer = false;
  console.log("You are on a Phone");
} else {
  isComputer = true;
  console.log("You are on a Computer");
}


