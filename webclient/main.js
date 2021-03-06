$(function() {
  
  var wsConnection;
  wsConnection = new WebSocket("ws://localhost:8008");
  
  wsConnection.onopen = function() {
    console.log("opened");
  };
  
  wsConnection.onclose = function() {
    return console.log("closed");
  };
  
  wsConnection.onerror = function(error) {
    return console.log("error: " + error);
  };
  
  wsConnection.onmessage = function(e) {
    console.log("got a message");
    var message;
    message = e.data;
    $("#messageArea").append(message + "<br />");
  };

  $(document).ready(function() {
    $("#chatButton").click(function(){
        var message = $("#chatMessage").val();
        $("#chatMessage").val("");
        console.log(message);
        wsConnection.send(message);
    }); 
  });

});
