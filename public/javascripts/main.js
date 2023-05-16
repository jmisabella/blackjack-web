

function head(lst) {
  return lst[0];
}

function tail(lst) {
  return lst.slice(1);
}

function concatenate(lst, delimiter) {
  var result = ''
  for (i = 0; i < lst.length; i++) {
    if (result.length > 0) {
      result += delimiter
    }
    result += lst[i];
  }
  return result;
}


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

function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
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

function contains(lst, element) {
  for (var i = 0; i < lst.length; i++) {
    if (lst[i] == element) {
      return true;
    }
  }
  return false;
}

function change_card_size(player_or_dealer, increase_or_decrease) {
  var classList = "";
  switch (player_or_dealer) {
    case "dealer": 
      classList = $('#dealer-cards').attr('class').split(/\s+/);
      break;
    case "player":
    default:
      classList = $('#player-cards-1').attr('class').split(/\s+/);
      break;
  }
  var nextSizeClass = "medium"; // default to medium 
  switch (increase_or_decrease) {
    case "decrease": 
      if (contains(classList, "smallest") || contains(classList, "small")) {
        nextSizeClass = "smallest";
      } else if (contains(classList, "medium-small")) {
        nextSizeClass = "small";
      } else if (contains(classList, "medium")) {
        nextSizeClass = "medium-small";
      } else if (contains(classList, "medium-large")) {
        nextSizeClass = "medium";
      } else if (contains(classList, "large")) {
        nextSizeClass = "medium-large";
      } else if (contains(classList, "largest")) {
        nextSizeClass = "large";
      } else {
        nextSizeClass = "medium"
      }
      break;
    case "increase":
    default: 
      if (contains(classList, "largest") || contains(classList, "large")) {
        nextSizeClass = "largest";
      } else if (contains(classList, "medium-large")) {
        nextSizeClass = "large";
      } else if (contains(classList, "medium")) {
        nextSizeClass = "medium-large";
      } else if (contains(classList, "medium-small")) {
        nextSizeClass = "medium";
      } else if (contains(classList, "small")) {
        nextSizeClass = "medium-small";
      } else if (contains(classList, "smallest")) {
        nextSizeClass = "small";
      } else {
        nextSizeClass = "medium"
      }
      break;
  }
  switch (player_or_dealer) {
    case "dealer": 
      $("#dealer-cards").removeClass("largest");
      $("#dealer-cards").removeClass("large");
      $("#dealer-cards").removeClass("medium-large");
      $("#dealer-cards").removeClass("medium");
      $("#dealer-cards").removeClass("medium-small");
      $("#dealer-cards").removeClass("small");
      $("#dealer-cards").removeClass("smallest");
      $("#dealer-cards").addClass(nextSizeClass);
      break;
    case "player":
    default:
      $("#player-cards-1").removeClass("largest");
      $("#player-cards-1").removeClass("large");
      $("#player-cards-1").removeClass("medium-large");
      $("#player-cards-1").removeClass("medium");
      $("#player-cards-1").removeClass("medium-small");
      $("#player-cards-1").removeClass("small");
      $("#player-cards-1").removeClass("smallest");
      $("#player-cards-1").addClass(nextSizeClass);
      $("#player-cards-2").removeClass("largest");
      $("#player-cards-2").removeClass("large");
      $("#player-cards-2").removeClass("medium-large");
      $("#player-cards-2").removeClass("medium");
      $("#player-cards-2").removeClass("medium-small");
      $("#player-cards-2").removeClass("small");
      $("#player-cards-2").removeClass("smallest");
      $("#player-cards-2").addClass(nextSizeClass);
      $("#player-cards-3").removeClass("largest");
      $("#player-cards-3").removeClass("large");
      $("#player-cards-3").removeClass("medium-large");
      $("#player-cards-3").removeClass("medium");
      $("#player-cards-3").removeClass("medium-small");
      $("#player-cards-3").removeClass("small");
      $("#player-cards-3").removeClass("smallest");
      $("#player-cards-3").addClass(nextSizeClass);
      $("#player-cards-4").removeClass("largest");
      $("#player-cards-4").removeClass("large");
      $("#player-cards-4").removeClass("medium-large");
      $("#player-cards-4").removeClass("medium");
      $("#player-cards-4").removeClass("medium-small");
      $("#player-cards-4").removeClass("small");
      $("#player-cards-4").removeClass("smallest");
      $("#player-cards-4").addClass(nextSizeClass);
      break;
  }
}

// given integer value, returns a dictionary (key/value list), with key being monetary value and value being number of chips
function chips(integerValue) {
  //// chip values:
  //// 1,000,000 fuscia (unofficial)
  ////   500,000 pink (unofficial)
  ////   100,000 light blue or grey
  ////    25,000 dark green
  ////     5,000 orange
  ////     1,000 yellow
  ////       500 purple
  ////       100 black
  ////        25 green
  ////        10 blue
  ////         5 red
  ////         1 white 

  // minuend - subtrahend = difference
  var minuend = parseInt(integerValue, 10);
  var subtrahend = 0;
  var millionChipCount = parseInt(((minuend - subtrahend) / 1000000), 10);
  subtrahend = subtrahend + (millionChipCount * 1000000);
  var fiveHundredThousandChipCount = parseInt(((minuend - subtrahend) / 500000), 10);
  subtrahend = subtrahend + (fiveHundredThousandChipCount * 500000);
  var hundredThousandChipCount = parseInt(((minuend - subtrahend) / 100000), 10);
  subtrahend = subtrahend + (hundredThousandChipCount * 100000);
  var twentyFiveThousandChipCount = parseInt(((minuend - subtrahend) / 25000), 10);
  subtrahend = subtrahend + (twentyFiveThousandChipCount * 25000);
  var fiveThousandChipCount = parseInt(((minuend - subtrahend) / 5000), 10);
  subtrahend = subtrahend + (fiveThousandChipCount * 5000);
  var thousandChipCount = parseInt(((minuend - subtrahend) / 1000), 10);
  subtrahend = subtrahend + (thousandChipCount * 1000);
  var fiveHundredChipCount = parseInt(((minuend - subtrahend) / 500), 10);
  subtrahend = subtrahend + (fiveHundredChipCount * 500);
  var hundredChipCount = parseInt(((minuend - subtrahend) / 100), 10);
  subtrahend = subtrahend + (hundredChipCount * 100);
  var twentyFiveChipCount = parseInt(((minuend - subtrahend) / 25), 10);
  subtrahend = subtrahend + (twentyFiveChipCount * 25);
  var tenChipCount = parseInt(((minuend - subtrahend) / 10), 10);
  subtrahend = subtrahend + (tenChipCount * 10);
  var fiveChipCount = parseInt(((minuend - subtrahend) / 5), 10);
  subtrahend = subtrahend + (fiveChipCount * 5);
  var oneChipCount = parseInt((minuend - subtrahend), 10);
  var result = {}
  result['1000000'] = millionChipCount;
  result['500000'] = fiveHundredThousandChipCount;
  result['100000'] = hundredThousandChipCount;
  result['25000'] = twentyFiveThousandChipCount;
  result['5000'] = fiveThousandChipCount;
  result['1000'] = thousandChipCount;
  result['100'] = hundredChipCount;
  result['25'] = twentyFiveChipCount;
  result['10'] = tenChipCount;
  result['5'] = fiveChipCount;
  result['1'] = oneChipCount;
  return result;
}

function chipsInnerMarkup(integerValue) {
  var chipsDict = chips(integerValue);
  var markup = ""; //"<chips>";
  for (var key in chipsDict) {
    var color = "white";
    switch(key) {
      case "1000000":
        color = "fuscia";
        break;
      case "500000":
        color = "pink";
        break;
      case "100000":
        color = "grey";
        break;
      case "25000":
        color = "dark-green";
        break;
      case "5000":
        color = "orange";
        break;
      case "1000":
        color = "yellow";
        break;
      case "500":
        color = "purple";
        break;
      case "100":
        color = "black";
        break;
      case "25":
        color = "green";
        break;
      case "10":
        color = "blue";
        break;
      case "5":
        color = "red";
        break;
      case "1":
      default:
        color = "white";
        break;   
    }
    markup += "<div class=\"chip " + color + "\" title=\"" + key + "\"></div>";
  } 
  // markup += "</chips>";
  return markup;
}

$(document).ready(function() {
  $("#make-smaller").click(function (e) {
    change_card_size("player", "decrease");
  });
  $("#make-larger").click(function (e) {
    change_card_size("player", "increase");
  });

  $("#btnTest").click(function (e) {
    var input = $("#txtTest").val();
    
    var results = chips(input);
    var str = "";
    for (var key in results) {
      str = str + "\r\n " + key + ": " + results[key];
    }

    alert(str);
  });

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
  init();
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
    if (e.key == "=" || e.key == "+") {
      change_card_size("player", "increase");
      return false;
    }
    if (e.key == "-") {
      change_card_size("player", "decrease");
      return false;
    }
});

// $(window).on("keydown", function (e) {
//     if (e.which == 13) {
//         getMessageAndSendToServer();
//         return false;
//     }
// });

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
