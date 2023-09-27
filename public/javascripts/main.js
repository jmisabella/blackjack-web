

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

// get the nth index of pattern from given str string
function nthIndex(str, pat, n) {
  var length= str.length, i= -1;
  while(n-- && i++<length) {
      i= str.indexOf(pat, i);
      if (i < 0) break;
  }
  return i;
}

// Given string value and delimiter and optional number of skips, splits string into a 2-element array 
// containing the 2 values resulting from splitting once.
function splitOnce(str, delimiter, numberOfSkips = 0) {
  if (numberOfSkips <= 0) {
    var first = str.substring(0, str.indexOf(delimiter)) 
    var second = str.substring(str.indexOf(delimiter)) 
    return [first, second];
  } else {
    var index = nthIndex(str, delimiter, numberOfSkips + 1);
    var first = str.substring(0, index);
    var second = str.substring(index);
    return [first, second];
  }
}

function cardsMarkup(json) {
  if (json == null || json.toString() == "") {
    return "";
  }
  let obj = JSON.parse(json.toString());
  var cards = ""; 
  for (const element of obj) {
    if (cards != "") {
      cards += ", " // first card's already been added, so seperate with a comma
    }
    cards += cardMarkup(element.rank, element.suit);  
  }
  // return "<div class=\"hand\">" + cards + "</div>";
  return cards;
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

function chipsInnerMarkup(integerValue, includeOuterDiv) {
  var chipsDict = chips(integerValue);
  var markup = "";
  if (includeOuterDiv) {
    markup = "<div class=\"chips\">";
  }
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
    var tokenCount = parseInt(chipsDict[key], 10);
    for (let i = 0; i < tokenCount; i++) {
      markup += "<div class=\"chip " + color + "\" title=\"" + key + "\"></div>";
    }
  } 
  if (includeOuterDiv) {
    markup += "</div>";
  }
  return markup;
}

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;
}

// $body = $("body");
// $(document).on(r
//     ajaxStart: function() { $body.addClass("loading");    },
//      ajaxStop: function() { $body.removeClass("loading"); }    
// });



$(document).ready(function() {

  window.addEventListener("load", init, false);


  const allRanges = document.querySelectorAll(".range-wrap");
  allRanges.forEach(wrap => {
    const range = wrap.querySelector(".range");
    const bubble = wrap.querySelector(".bubble");

    range.addEventListener("input", () => {
      setBubble(range, bubble);
    });
    setBubble(range, bubble);
  });

  $("#settings-submit").click(function (e) {
    // var result = splitOnce("[{\"rank\": \"Two\", \"suit\": \"Hearts\"},{\"rank\": \"Three\", \"suit\": \"Spades\"},{\"rank\": \"Four\", \"suit\": \"Diamonds\"}]", "},{", 1);
    // alert("1: " + result[0]);
    // alert("2: " + result[1]);

    // $body = $("body");
    // $body.addClass("loading"); 
    // $body.addClass("modal"); 
    
    // submit new game to server to retrieve game steps to display
    var dealerHitLimit = $("input[type='radio'][name='settings-dealer-hit-limit']").val();
    var blackjackPayout = $("input[type='radio'][name='settings-blackjack-payout']").val();
    var deckCount = $("#settings-deck-count").val();
    var splitLimit = $("#settings-split-limit").val();
    var allowSurrender = $("input[type='radio'][name='settings-allow-surrender']").val();
    var hitOnSplitAces = $("input[type='radio'][name='settings-hit-on-split-aces']").val();
    var resplitOnSplitAces = $("input[type='radio'][name='settings-resplit-on-split-aces']").val();
    var initialBank = $("#settings-initial-bank").val();
 
    var playerFirstCard = $("#player-first-card").val();
    var playerSecondCard = $("#player-second-card").val();
    var dealerFirstCard = $("#dealer-first-card").val();
    var dealerSecondCard = $("#dealer-second-card").val();

    var settings = null;
    $("#bank").text(initialBank);
    
    if (playerFirstCard != null &&
      playerFirstCard != "na" &&
      playerSecondCard != null &&
      playerSecondCard != "na" &&
      dealerFirstCard != null &&
      dealerFirstCard != "na" &&
      dealerSecondCard != null &&
      dealerSecondCard != "na") {
        settings = { 
          "dealer-hit-limit": dealerHitLimit,
          "blackjack-payout": blackjackPayout,
          "deck-count": deckCount,
          "split-limit": splitLimit,
          "allow-surrender": allowSurrender,
          "hit-on-split-aces": hitOnSplitAces,
          "resplit-on-split-aces": resplitOnSplitAces,
          "initial-bank": initialBank,
          "initial-player-ranks": [playerFirstCard, playerSecondCard], 
          "initial-dealer-ranks": [dealerFirstCard, dealerSecondCard], 
      };
    } else {
      settings = { 
        "dealer-hit-limit": dealerHitLimit,
        "blackjack-payout": blackjackPayout,
        "deck-count": deckCount,
        "split-limit": splitLimit,
        "allow-surrender": allowSurrender,
        "hit-on-split-aces": hitOnSplitAces,
        "resplit-on-split-aces": resplitOnSplitAces,
        "initial-bank": initialBank
      };
    }
    let json = {
      message: JSON.stringify(settings)
    }
     
    webSocket.send(JSON.stringify(json));
    
    $('#settings-modal').modal('hide');
    $('#settings-modal').css('display', 'none');
    $('.modal-backdrop').remove();

    $("#loading-modal").css('display', 'block');
   
    window.clearInterval(stepIntervalEvent);
    stepIntervalEvent = window.setInterval(step, interval);
    $("#play-pause").html("||");

  });
  
  $("#make-smaller").click(function (e) {
    change_card_size("player", "decrease");
    change_card_size("dealer", "decrease");
  });
  $("#make-larger").click(function (e) {
    change_card_size("player", "increase");
    change_card_size("dealer", "increase");
  });

  $("#settings").click(function (e) {
    $('#settings-modal').css('display', 'block');
    $('#settings-modal').modal('toggle');
  });

  $("#settings-close").click(function (e) {
    $('#settings-modal').modal('hide');
    $('#settings-modal').css('display', 'none');
    $('.modal-backdrop').remove();
  });

});

function step() {
  var action = $("#action").text();
  var lastAction = $("#last-action").text();
  var actionVisible = $("#action").css("visibility") == "visible";

  consoleLog("LAST: " + lastAction + "; CURRENT: " + action + "; VISIBLE: " + actionVisible);

  var clearCards = lastAction == "Win" || 
    lastAction == "Lose" || 
    lastAction == "Tie"; // ||
    // action == "Win" ||
    // action == "Lose" || 
    // action == "Tie";

  var clearAction = lastAction == "Win" || 
    lastAction == "Lose" || 
    lastAction == "Tie" || 
    lastAction.includes("Bust") || 
    lastAction == "Blackjack" || 
    lastAction.includes("Stand") ||  // ???
    lastAction.includes("Dealer Busts"); // ||  // ???
    // lastAction.includes("+") ||  // ???
    // // lastAction.includes("Win") ||  // !!! ???
    // lastAction.includes("-");
       // ???

  if (clearCards) {
    // alert("clearing cards"); 
    // wait(interval * 1.75);
    $("#dealer-cards div.chips").html("");
    $("#dealer-cards div.hand").html("");
    $("#player-cards-1 div.chips").html("");
    $("#player-cards-1 div.hand").html("");
    $("#player-cards-2 div.chips").html("");
    $("#player-cards-2 div.hand").html("");
    $("#player-cards-3 div.chips").html("");
    $("#player-cards-3 div.hand").html("");
    $("#player-cards-4 div.chips").html("");
    $("#player-cards-4 div.hand").html("");
    // return;
  }
  if (clearAction) {
    // wait(interval * 1.75);
    if ($("#action").text() != "") {
      // wait(interval * 2.5);
      wait(interval * 5);
    } 
    // wait(interval * 3);
    $("#action").text("");
    $("#last-action").text("");
    return;
  }
  $("#dealer-cards div.chips").removeClass("fout");
  $("#dealer-cards div.hand").removeClass("fout");
  $("#player-cards-1 div.chips").removeClass("fout");
  $("#player-cards-1 div.hand").removeClass("fout");
  $("#player-cards-2 div.chips").removeClass("fout");
  $("#player-cards-2 div.hand").removeClass("fout");
  $("#player-cards-3 div.chips").removeClass("fout");
  $("#player-cards-3 div.hand").removeClass("fout");
  $("#player-cards-4 div.chips").removeClass("fout");
  $("#player-cards-4 div.hand").removeClass("fout");
  // if (actionVisible) {
  //   // wait(interval * 1.75);  // TODO: uncomment this line
  //   $("#action").css("visibility", "hidden");
  //   return;
  // }
  var raw = $("#remaining-steps").text();
  if (raw == "") {
    return;
  }
  var nextStepRaw = "";
  var remainingRaw = raw;
  var validJson = false;
  var i = 0;
  while ((nextStepRaw == "" && !validJson) || i < 30) {
    // alert("i: " + i);
    try {
      if (i >= 30) {
        break;
      }
      var result = splitOnce(raw, "},{", i);
      nextStepRaw = result[0];
      remainingRaw = result[1];
      JSON.parse(nextStepRaw + "}]");
      validJson = true; // if an error isn't thrown, then JSON is valid
      // alert("valid JSON: " + nextStepRaw + "}]");
      nextStepRaw = nextStepRaw + "}]";
      remainingRaw = "[" + remainingRaw.substring(2);
      // alert("remaining JSON: " + remainingRaw);
      break;
    } catch (error) {
      validJson = false;
      i += 1;
    }
  }
  var steps = JSON.parse(nextStepRaw);
  $currentDiv = null;
  var current = head(steps);
  // console.info(current); // ??? TODO: remove
  var bank = current.afterTokens;
  if (bank != null && bank != "") {
    $("#bank").text(bank) 
  }
  var bettingStrategy = current.bettingStrategy;
  if (bettingStrategy != null && bettingStrategy != "") {
    $("#betting-strategy").text(bettingStrategy);
  }
  var minBetMultiplier = current.minBetMultiplier;
  if (minBetMultiplier != null && minBetMultiplier != "") {
    $("#min-bet-multiplier").text(minBetMultiplier + " min bet multiplier");
  }
  var action = current.action;
  $("#last-action").text(action);
  // if (action == "Bet") {
  //   alert("BET");
  //   alert(minBetMultiplier);
  //   alert(bettingStrategy);
  // } 
  var remaining = remainingRaw;
  var player = current.playerId.replace("1", "").replace("2", "").replace("3", "").replace("4", "").replace("d", "D").replace("p", "P");
  var actionTokens = current.actionTokens;
  var beforeCards = current.beforeCards;
  var actionPhrase = null;
  actionPhrase = player + " " + action; 
  // afterCards is seq of seq of cards (to account for when player splits)
  var actionCards = current.actionCards;
  var afterCards = current.afterCards;
  var afterTokens = current.afterTokens;

  var previousDiv = $("#previous-div").text();
  if (player == "Dealer" || player == "dealer") {
    $currentDiv = $("#dealer-cards");
  } else {
    if (previousDiv == null || previousDiv == "") {
      $currentDiv = $("#player-cards-1");
    } else {
      switch(previousDiv) {
        case "dealer-cards":
          $currentDiv = $("#player-cards-1");
          break;
        case "player-cards-1":
          $currentDiv = player == "dealer" ? $("#dealer-cards") : $("#player-cards-2");
          break;
        case "player-cards-2":
          $currentDiv = player == "dealer" ? $("#dealer-cards") : $("#player-cards-3");
          break;
        case "player-cards-3":
          $currentDiv = player == "dealer" ? $("#dealer-cards") : $("#player-cards-4");
          break;
        case "player-cards-4":
          $currentDiv = player == "dealer" ? $("#dealer-cards") : $("#player-cards-1");
          break;
        default:
          $currentDiv = $("#player-cards-1");
          break;
       }
    }
  }
  if (action == "Shuffle") {
    actionPhrase = player + " Shuffles";
  } else if (action == "LeaveTable") {
    actionPhrase = "Leaving Game";
  } else if (action == "Surrender") {
    actionPhrase = "Surrender";
  } else if (action == "BuyInsurance") {
    actionPhrase = "+" + actionTokens + " (Insurance)";
  } else if (action == "InsufficientFunds") {
    actionPhrase = "Insufficient Funds";
  } else if (action == "Bet" || action == "DoubleDown") {
    var suffix = "";
    if (action == "Bet") {
      suffix = "";
      var newMarkup = chipsInnerMarkup(actionTokens, false);
      $currentDiv.find(".chips").html(newMarkup);
      // actionPhrase = "- " + actionTokens; // ???
      actionPhrase = actionTokens.toString() + suffix;
      $("#action").addClass("large");
    } else {
      $("#action").removeClass("large");
      suffix = " (Double-Down)";
      var existingMarkup = $currentDiv.find(".chips").html();
      var newMarkup = chipsInnerMarkup(actionTokens, false);
      $currentDiv.find(".chips").html(existingMarkup + newMarkup);
      // afterCards reflects the newly-dealt card from doubling-down
      var newMarkup = cardsMarkup(JSON.stringify(afterCards[0]));
      $currentDiv.find(".hand").html(newMarkup);
      actionPhrase = actionTokens.toString() + suffix;
    }
    // alert("HEYY #1"); // TODO
    // actionPhrase = "+" + actionTokens.toString() + suffix;
  } else if (action == "IsDealt") {
    actionPhrase = player + " " + action;
    var newMarkup = cardsMarkup(JSON.stringify(actionCards));
    $currentDiv.find(".hand").html(newMarkup);
    actionPhrase = "";
  } else if (action == "Hit") {
    actionPhrase = ""
    var newMarkup = cardsMarkup(JSON.stringify(head(afterCards)));
    $currentDiv.find(".hand").html(newMarkup);
  } else if (action == "Split") {
    actionPhrase = action;
    switch (afterCards.length) { // this is the number of hands
      case 1:
        var newMarkup = cardsMarkup(JSON.stringify(afterCards[0]));
        $currentDiv.find(".hand").html(newMarkup);
        break;
      case 2:
        var newMarkup = cardsMarkup(JSON.stringify(afterCards[0]));
        $currentDiv.find(".hand").html(newMarkup);
        newMarkup = cardsMarkup(JSON.stringify(afterCards[1]));
        switch(previousDiv) {
          case null:
            // alert("previous div: null, next div: #player-cards-2");
            $("#player-cards-2").find(".hand").html(newMarkup);
            break;
          case "":
            // alert("previous div: empty string, next div: #player-cards-2");
            $("#player-cards-2").find(".hand").html(newMarkup);
            break;
          case "player-cards-1":
            // alert("previous div: #player-cards-1, next div: #player-cards-2");
            $("#player-cards-2").find(".hand").html(newMarkup);
            break;
          case "player-cards-2":
            // alert("previous div: #player-cards-2, next div: #player-cards-3");
            $("#player-cards-3").find(".hand").html(newMarkup);
            break;
          case "player-cards-3":
            // alert("previous div: #player-cards-3, next div: #player-cards-4");
            $("#player-cards-4").find(".hand").html(newMarkup);
            break;
          case "player-cards-4":
            // alert("previous div: #player-cards-4, next div: #player-cards-1");
            $("#player-cards-1").find(".hand").html(newMarkup);
            break;
          default:
            // TODO: this is the executed block when splitting from 1 hand to 2, previous div is not apparently getting set properly
            // alert("previous div not found, defaulting to use next div: #player-cards-2");
            $("#player-cards-2").find(".hand").html(newMarkup);
            break;
        }
      default:
        // JMI: 9/12: added conditional 
        if (afterCards[0] != null && afterCards[0].length > 0) {
          var newMarkup = cardsMarkup(JSON.stringify(afterCards[0]));
          $currentDiv.find(".hand").html(newMarkup);
        } 
        break;
    }
  } else if (action == "Bust") {
    if (player.toLowerCase() == "dealer") {
      actionPhrase = player + " Busts";
    } else {
      actionPhrase = "Bust";
    }
    // var newMarkup = cardsMarkup(JSON.stringify(afterCards[0]));
    var newMarkup = cardsMarkup(JSON.stringify(actionCards));
    $currentDiv.find(".hand").html(newMarkup);
  } else if (action == "Blackjack") {
    if (player.toLowerCase() == "dealer") {
      actionPhrase = player + " Blackjack";
    } else {
      actionPhrase = "Blackjack";
    }
  } else if (action == "Stand") {
    // if (player.toLowerCase() == "dealer") {
    //   //// don't display action when dealer stands
    //   actionPhrase = "";
    // } else {
    //   actionPhrase = "Stand";
    // }
    actionPhrase = ""; // don't display action for Stand
  } else if (action == "ShowCards") {
    var newMarkup = cardsMarkup(JSON.stringify(actionCards));
    $currentDiv.find(".hand").html(newMarkup);
    actionPhrase = "";
  } else if (action == "Lose") {
    if (player.toLowerCase() == "dealer") {
      // actionPhrase = player + " " + "Loses";
      actionPhrase = "Win";
    } else {
      actionPhrase = "House Wins";
    }
    actionPhrase = actionTokens; // TODO ???
  } else if (action == "Win") {
    if (player.toLowerCase() == "dealer") {
      // actionPhrase = player + " " + "Wins";
      actionPhrase = "House Wins";
    } else {
      actionPhrase = "Win";
    }
    actionPhrase = actionTokens;
    if (!actionPhrase.toString().startsWith("-")) {
      actionPhrase = "+" + actionPhrase.toString();
    }
  } else if (action == "Tie") {
    actionPhrase = "Tie";
  }
  $("#previous-div").text($currentDiv);
  $("#remaining-steps").text(remaining);
  // $("#action").text(actionPhrase);
  if (actionPhrase != null && actionPhrase != "") {
    $("#action").text(actionPhrase);
    // $("#action").addClass("fade");
    // setTimeout(function(){
    //   $("#action").removeClass("fade");
    // }, 3000); // remove animation class after 3 seconds, the length of the animation
    wait(interval * 2.5); // TODO: ??? remove?
  }
  $("#action").css("visibility", "visible");
  // TODO: make action fade in/out
  // $("#action").removeClass("fade");
  // $("#action").addClass("fade"); // jmi: removed 9/18
  if ((actionPhrase.toString().startsWith("+") && !actionPhrase.toString().includes("Double")) || actionPhrase.toString().startsWith("-")) {
    $("#action").addClass("large");
    wait(interval * 2); // TODO: remove
    // alert("HEYY #2");
  } else {
    $("#action").removeClass("large");
  }
  if (actionPhrase.toString().startsWith("-")) {
    $("#action").addClass("red");
    $("#action").removeClass("green");
  } else if (actionPhrase.toString().includes("Bust")) {
    $("#action").addClass("red");
    $("#action").removeClass("green");
  } else if (actionPhrase.toString().startsWith("+")) {
    $("#action").addClass("green");
    $("#action").removeClass("red");
  } else if (actionPhrase.toString().startsWith("Blackjack")) {
    $("#action").addClass("green");
    $("#action").removeClass("red");
  } else {
    $("#action").removeClass("green");
    $("#action").removeClass("red");
  }
  // console.info("ACTION: " + actionPhrase);
  window.clearInterval(stepIntervalEvent); 
  stepIntervalEvent = window.setInterval(step, interval); 
}
var interval = 200;

// var interval = 220;
// var interval = 400;
// var interval = 900;
// var interval = 600;
// var interval = 300;
// var interval = 200;
var stepIntervalEvent = null;
// var stepIntervalEvent = window.setInterval(step, interval);

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
  init();
}

function onError(event) {
    consoleLog("ERROR: " + event.data);
    consoleLog("ERROR: " + JSON.stringify(event));
}


function onMessage(event) {
    $("#loading-modal").css('display', 'none');
    console.log(event.data);
    let receivedData = JSON.parse(event.data);
    console.log("New Data: ", receivedData);
    // TODO: update cards library to include players' bank amounts in the history
    var players = receivedData.body.blackjack.players;
    var remaining = receivedData.body.blackjack.history;
    $("#remaining-steps").text(JSON.stringify(remaining));
    // console.info("REMAINING COUNT: " + remaining.length);
    // get the text from the "body" field of the json we
    // receive from the server.
} 

function consoleLog(message) {
    console.log("New message: ", message);
}

window.addEventListener("load", init, false);

$("#speed").change(function() {
  var pauseMs = $("#speed").val();
  interval = pauseMs;
  if ($("#play-pause").html() != "||") {
    window.clearInterval(stepIntervalEvent);
    stepIntervalEvent = window.setInterval(step, interval);
  }
});
$("#speed").on("pointermove", function(e) {
  var pauseMs = $("#speed").val();
  interval = pauseMs;
  if ($("#play-pause").html() != "||") {
    window.clearInterval(stepIntervalEvent);
    stepIntervalEvent = window.setInterval(step, interval);
  }
});
$("#speed").on("input propertychange", function(e) {
  var pauseMs = $("#speed").val();
  interval = pauseMs;
  if ($("#play-pause").html() != "||") {
    window.clearInterval(stepIntervalEvent);
    stepIntervalEvent = window.setInterval(step, interval);
  }
});

$("#play-pause").click(function (e) {
  if ($("#play-pause").html() == "||") {
    $("#play-pause").html("&#9658;");
    window.clearInterval(stepIntervalEvent);
    wait(interval * 4);
  } else {
    window.clearInterval(stepIntervalEvent);
    stepIntervalEvent = window.setInterval(step, interval);
    $("#play-pause").html("||");
  } 
});

$("#dark-mode").click(function (e) {
  var isDark = $("#dark-mode").is(":checked");
  if (isDark) {
    $("body").addClass("dark-mode");
    $("body").removeClass("light-mode");
  } else {
    $("body").addClass("light-mode");
    $("body").removeClass("dark-mode");
  }
});

// send the message when the user presses the <enter> key while in the textarea
$(window).on("keydown", function (e) {
    if (e.which == 13) {
        // getMessageAndSendToServer();
        return false;
    }
    if (e.key == "=" || e.key == "+") {
      change_card_size("player", "increase");
      change_card_size("dealer", "increase");
      return false;
    }
    if (e.key == "-") {
      change_card_size("player", "decrease");
      change_card_size("dealer", "decrease");
      return false;
    }
});

// $(window).on("keydown", function (e) {
//     if (e.which == 13) {
//         getMessageAndSendToServer();
//         return false;
//     }
// });

// 1. create a json version of the message.
// 2. send the message to the server.
// function getMessageAndSendToServer() {

//     // get the text from the textarea
//     messageInput = $("#message-input").val();

//     // clear the textarea
//     $("#message-input").val("");

//     // if the trimmed message was blank, return now
//     if ($.trim(messageInput) == "") {
//         return false;
//     }

//     // create the message as json
//     let jsonMessage = {
//         message: messageInput
//     };

//     // send our json message to the server
//     sendToServer(jsonMessage);
// }

// // send the data to the server using the WebSocket
// function sendToServer(jsonMessage) {
//     if(webSocket.readyState == WebSocket.OPEN) {
//         consoleLog("SENT: " + jsonMessage.message);
//         webSocket.send(JSON.stringify(jsonMessage));
//     } else {
//         consoleLog("Could not send data. Websocket is not open.");
//         init();
//     }
// }
