package models.web

import akka.actor._
import play.api.libs.json._
import play.api.libs.json.Json
import cards.modules.Blackjack
import cards.classes.bettingstrategy.BlackjackBettingStrategy
import cards.classes.options.blackjack.BlackjackOptions
import cards.classes.state.{ BlackjackGameState, CompletedBlackjack }

object BlackjackWebSocketActor {
    // DOCS: Props is a ActorRef configuration object, that is immutable, so it is 
    // thread-safe and fully sharable. Used when creating new actors through 
    // ActorSystem.actorOf and ActorContext.actorOf.
    def props(clientActorRef: ActorRef) = Props(new BlackjackWebSocketActor(clientActorRef))
}

class BlackjackWebSocketActor(clientActorRef: ActorRef) extends Actor {
    val logger = play.api.Logger(getClass)

    logger.info(s"BlackjackWebSocketActor class started")

    val controller = Blackjack
    var initialState: BlackjackGameState = controller.init(1, BlackjackOptions(deckCount = 3, initialBank = 2000))
    var nextIteration: CompletedBlackjack = CompletedBlackjack(initialState)

    // this is where we receive json messages sent by the client
    // and send them a json reply
    def receive = {
        case jsValue: JsValue =>
          logger.info(s"JS-VALUE: $jsValue")
          val json: String = (jsValue \ "message").as[String]
          if (json.contains("initial-bank")) {
            initialState = controller.init(1, BlackjackOptions(json))
            nextIteration = controller.completeGame(initialState)
            val jsVal: JsValue = Json.parse(s"""{"body": ${nextIteration.toString()}}""")
            clientActorRef ! (jsVal)
          } else {
            // TODO... 
            ???
          }
          
          // TODO: if clientMessage is a BlackjackSettings, then construct state using settings as arg
          // TODO: if clientMessage is a BlackjackState, then call completeGame with the state as arg
          // TODO: if clientMessage is a CompletedBlackjackState, then call completeGame with the completed state as arg

          // val response = clientMessage match {
          //   case msg => msg 
          // }

           //  // val nextIteration = controller.completeGame(state):w
            // state = controller.init(nextIteration)
            // // logger.info(s"JS-VALUE: $jsValue")
            // logger.info("HISTORY LENGTH: " + nextIteration.history.length)
            // // logger.info("STATE: " + nextIteration.toString())
            // val clientMessage = getMessage(jsValue)
            // // // val json: JsValue = Json.parse(s"""{"body": "You said, ‘$clientMessage’"}""")
            // val json: JsValue = Json.parse(nextIteration.history.mkString("[", ",", "]"))
            // // val player1CardHistory = state.history.filter(p => p.playerId == "player1" && p.afterCards != Nil).map(_.afterCards)
            // // val json: JsValue = Json.parse(player1CardHistory.mkString("[", ",", "]"))

            // val json: JsValue = Json.parse(s"""{"body": "$response"}""")
            // clientActorRef ! (json)
    }

    // parse the "message" field from the json the client sends us
    // def getMessage(json: JsValue): String = (json \ "message").as[String]

}
