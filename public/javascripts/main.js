
// this function is more of a temporary function for testing/debugging
function cardMarkupFromString(strValue) {
  if (strValue.indexOf(" of ") != -1) {
    let splitted = strValue.split(" of ");
    let rank = splitted[0].trim();
    let suit = splitted[1].trim();
    return cardMarkup(rank, suit);
  } else { // else parse string as json
    let obj = JSON.parse(strValue);
    let rank = obj.rank; 
    let suit = obj.suit;
    return cardMarkup(rank, suit);
  }
}

function cardsMarkup(json) {
  let obj = JSON.parse(json);
  var cards = ""; 
  for (const element of obj) {
    if (cards != "") {
      cards += ", " // first card's already been added, so seperate with a comma
    }
    cards += cardMarkup(element.rank, element.suit);  
  }
  return "<div class=\"hand\">" + cards + "</div>";
}

function cardMarkup(rank, suit) {
  var suitSymbol = "";
  switch (suit.toLowerCase()) {
    case "clubs": 
      suitSymbol = "&clubs;";
      break;
    case "spades": 
      suitSymbol = "&spades;";
      break;
    case "hearts": 
      suitSymbol = "&hearts;";
      break;
    case "diamonds": 
      suitSymbol = "&diams;";
      break;
  }
  var index = "";
  switch (rank.toLowerCase()) {
    case "two":
      index = "2";
      break;
    case "three":
      index = "3";
      break;
    case "four":
      index = "4";
      break;
    case "five":
      index = "5";
      break;
    case "six":
      index = "6";
      break;
    case "seven":
      index = "7";
      break;
    case "eight":
      index = "8";
      break;
    case "nine":
      index = "9";
      break;
    case "ten":
      index = "10";
      break;
    case "jack":
      index = "J";
      break;
    case "queen":
      index = "Q";
      break;
    case "king":
      index = "K";
      break;
    case "ace":
      index = "A";
      break;
    default: // TOOD: case of Jokers
      index = ""; // default will stay face-down
      break;
  }
  var colorClass = ""; // only applicable for Hearts and Diamonds (default is already black)
  if (suit.toLowerCase() == "hearts" || suit.toLowerCase() == "diamonds") {
    colorClass = "red";
  }
  var card = ""; 
  switch (rank.toLowerCase()) {
    case "two":
      card += "<div class=\"card\">";
      card +=   "<div class=\"front " + colorClass + "\">";
      card +=     "<div class=\"index\">" + index + "<br />" + suitSymbol + "</div>";
      card +=     "<div class=\"spotB1\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotB5\">" + suitSymbol + "</div>";
      card +=   "</div>";
      card += "</div>";
      break;
    case "three":
      card += "<div class=\"card\">";
      card +=   "<div class=\"front " + colorClass + "\">";
      card +=     "<div class=\"index\">" + index + "<br />" + suitSymbol + "</div>";
      card +=     "<div class=\"spotB1\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotB3\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotB5\">" + suitSymbol + "</div>";
      card +=   "</div>";
      card += "</div>";
      break;
    case "four":
      card += "<div class=\"card\">";
      card +=   "<div class=\"front " + colorClass + "\">";
      card +=     "<div class=\"index\">" + index + "<br />" + suitSymbol + "</div>";
      card +=     "<div class=\"spotA1\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotA5\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotC1\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotC5\">" + suitSymbol + "</div>";
      card +=   "</div>";
      card += "</div>";
      break;
    case "five":
      card += "<div class=\"card\">";
      card +=   "<div class=\"front " + colorClass + "\">";
      card +=     "<div class=\"index\">" + index + "<br />" + suitSymbol + "</div>";
      card +=     "<div class=\"spotA1\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotA5\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotB3\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotC1\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotC5\">" + suitSymbol + "</div>";
      card +=   "</div>";
      card += "</div>";
      break;
    case "six":
      card += "<div class=\"card\">";
      card +=   "<div class=\"front " + colorClass + "\">";
      card +=     "<div class=\"index\">" + index + "<br />" + suitSymbol + "</div>";
      card +=     "<div class=\"spotA1\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotA3\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotA5\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotC1\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotC3\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotC5\">" + suitSymbol + "</div>";
      card +=   "</div>";
      card += "</div>";
      break;
    case "seven":
      card += "<div class=\"card\">";
      card +=   "<div class=\"front " + colorClass + "\">";
      card +=     "<div class=\"index\">" + index + "<br />" + suitSymbol + "</div>";
      card +=     "<div class=\"spotA1\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotA3\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotA5\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotB2\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotC1\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotC3\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotC5\">" + suitSymbol + "</div>";
      card +=   "</div>";
      card += "</div>";
      break;
    case "eight":
      card += "<div class=\"card\">";
      card +=   "<div class=\"front " + colorClass + "\">";
      card +=     "<div class=\"index\">" + index + "<br />" + suitSymbol + "</div>";
      card +=     "<div class=\"spotA1\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotA3\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotA5\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotB2\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotB4\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotC1\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotC3\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotC5\">" + suitSymbol + "</div>";
      card +=   "</div>";
      card += "</div>";
      break;
    case "nine":
      card += "<div class=\"card\">";
      card +=   "<div class=\"front " + colorClass + "\">";
      card +=     "<div class=\"index\">" + index + "<br />" + suitSymbol + "</div>";
      card +=     "<div class=\"spotA1\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotA2\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotA4\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotA5\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotB3\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotC1\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotC2\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotC4\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotC5\">" + suitSymbol + "</div>";
      card +=   "</div>";
      card += "</div>";
      break;
    case "ten":
      card += "<div class=\"card\">";
      card +=   "<div class=\"front " + colorClass + "\">";
      card +=     "<div class=\"index\">" + index + "<br />" + suitSymbol + "</div>";
      card +=     "<div class=\"spotA1\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotA2\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotA4\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotA5\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotB2\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotB4\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotC1\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotC2\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotC4\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotC5\">" + suitSymbol + "</div>";
      card +=   "</div>";
      card += "</div>";
      break;
    case "jack":
      card += "<div class=\"card\">";
      card +=   "<div class=\"front " + colorClass + "\">";
      card +=     "<div class=\"index\">" + index + "<br />" + suitSymbol + "</div>";
      card +=     "<img class=\"face\" src=\"/assets/images/cards/jack.gif\")\" alt=\"jack\" />";
      card +=     "<div class=\"spotA1\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotC5\">" + suitSymbol + "</div>";
      card +=   "</div>";
      card += "</div>";
      break;
    case "queen":
      card += "<div class=\"card\">";
      card +=   "<div class=\"front " + colorClass + "\">";
      card +=     "<div class=\"index\">" + index + "<br />" + suitSymbol + "</div>";
      card +=     "<img class=\"face\" src=\"/assets/images/cards/queen.gif\")\" alt=\"queen\" />";
      card +=     "<div class=\"spotA1\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotC5\">" + suitSymbol + "</div>";
      card +=   "</div>";
      card += "</div>";
      break;
    case "king":
      card += "<div class=\"card\">";
      card +=   "<div class=\"front " + colorClass + "\">";
      card +=     "<div class=\"index\">" + index + "<br />" + suitSymbol + "</div>";
      card +=     "<img class=\"face\" src=\"/assets/images/cards/king.gif\")\" alt=\"king\" />";
      card +=     "<div class=\"spotA1\">" + suitSymbol + "</div>";
      card +=     "<div class=\"spotC5\">" + suitSymbol + "</div>";
      card +=   "</div>";
      card += "</div>";
      break;
    case "ace":
      card += "<div class=\"card\">";
      card +=   "<div class=\"front " + colorClass + "\">";
      card +=     "<div class=\"index\">" + index + "<br />" + suitSymbol + "</div>";
      card +=     "<div class=\"ace\">" + suitSymbol + "</div>";
      card +=   "</div>";
      card += "</div>";
      break;
    default: // TODO: Jokers
      card = "<div class=\"card\" />"; // default case is face-down
  }
  return card;
}


$("#btnTest").click(function (e) {
  let input = $("#txtTest").val();
  // var result = cardMarkupFromString(input);
  let result = cardsMarkup(input);
  console.log(result)
  $("#testResult").html(result);
});


var webSocket;
var messageInput;

function init() {
    var host = location.origin.replace(/^https/, 'wss').replace(/^http/, 'ws'); 
    webSocket = new WebSocket(`${host}/ws`);
    webSocket.onopen = onOpen;
    webSocket.onclose = onClose;
    webSocket.onmessage = onMessage;
    webSocket.onerror = onError;
    $("#message-input").focus();
}

function onOpen(event) {
    consoleLog("CONNECTED");
}

function onClose(event) {
    consoleLog("DISCONNECTED");
    appendClientMessageToView(":", "DISCONNECTED");
}

function onError(event) {
    consoleLog("ERROR: " + event.data);
    consoleLog("ERROR: " + JSON.stringify(event));
}

function onMessage(event) {
    console.log(event.data);
    let receivedData = JSON.parse(event.data);
    console.log("New Data: ", receivedData);
    // get the text from the "body" field of the json we
    // receive from the server.
    appendServerMessageToView("Server", receivedData.body);
}

function appendClientMessageToView(title, message) {
    $("#message-content").append("<span>" + title + ": " + message + "<br /></span>");
}

function appendServerMessageToView(title, message) {
    $("#message-content").append("<span>" + title + ": " + message + "<br /><br /></span>");
}

function consoleLog(message) {
    console.log("New message: ", message);
}

window.addEventListener("load", init, false);

$("#send-button").click(function (e) {
    console.log("Sending ...");
    getMessageAndSendToServer();
    // put focus back in the textarea
    $("#message-input").focus();
});

// send the message when the user presses the <enter> key while in the textarea
$(window).on("keydown", function (e) {
    if (e.which == 13) {
        getMessageAndSendToServer();
        return false;
    }
});

// there’s a lot going on here:
// 1. get our message from the textarea.
// 2. append that message to our view/div.
// 3. create a json version of the message.
// 4. send the message to the server.
function getMessageAndSendToServer() {

    // get the text from the textarea
    messageInput = $("#message-input").val();

    // clear the textarea
    $("#message-input").val("");

    // if the trimmed message was blank, return now
    if ($.trim(messageInput) == "") {
        return false;
    }

    // add the message to the view/div
    appendClientMessageToView("Me", messageInput);

    // create the message as json
    let jsonMessage = {
        message: messageInput
    };

    // send our json message to the server
    sendToServer(jsonMessage);
}

// send the data to the server using the WebSocket
function sendToServer(jsonMessage) {
    if(webSocket.readyState == WebSocket.OPEN) {
        consoleLog("SENT: " + jsonMessage.message);
        webSocket.send(JSON.stringify(jsonMessage));
    } else {
        consoleLog("Could not send data. Websocket is not open.");
    }
}
