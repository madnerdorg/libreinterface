//Warning: Default variable only available in ES6
websocket_errors = [];

function connect(ip="echo.websocket.org",port=80,ssl=false){
    try {
        if(ssl){
            ws_type = "wss://";
        } else {
            ws_type = "ws://";
        }

        url = ws_type+ip+':'+port+'/';

        var ws = new WebSocket(url);

        ws.onopen = function() {         
            console.log('Connected to '+url);
        };

        ws.onerror = function(event) {
            console.log('Unable to connected to '+url);
            connection_error = {};
            connection_error.ssl = ssl;
            connection_error.ip = ip;
            connection_error.port = port;
            websocket_errors.push(connection_error);
            console.log(websocket_errors);
        };

        ws.onclose = function() {
            console.log('Connection closed at '+url);
        };

        ws.onmessage = function(event) {
           console.log("Received: "+event.data);
       };
       return ws;
   }
   catch (e){
    console.log("Invalid websocket configuration");
    return false;
    }  
}
/*
function url_to_connection(url){
    connection = {};
    connection.ssl = null;
    connection.ip = null;
    connection.port = null;

    //SSL
    url_array = url.split(":");
    if(url_array[0] == "ws"){
        connection.ssl = false;
    }

    if(url_array[0] == "wss"){
        connection.ssl = true;
    }

    //IP
    connection.ip = url.array[1].substring(2);

    //Port
    if(url_array.length == 2){
        if(connection.ssl){
            connection.port = 443;
        }else{
            connection.port = 80;
        }
    }

    if(url_array.length == 3){
        connection.port = url_array[2].substring(0, url_array[2]-1);
    }
    return connection;
}
*/