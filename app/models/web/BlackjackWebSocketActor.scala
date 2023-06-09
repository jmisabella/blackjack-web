package models.web

import akka.actor._
import play.api.libs.json._
import play.api.libs.json.Json
import cards.modules.Blackjack
import cards.classes.bettingstrategy.BlackjackBettingStrategy


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
    var state = controller.init(1, 2000, 4000, deckCount = 3)
    // var nextIteration = controller.completeGame(state)
    // state = controller.next(state, 500, false) // for initial walking skeleton simply make 1000 moves initially for 2 players with 2000 each...

    // this is where we receive json messages sent by the client
    // and send them a json reply
    def receive = {
        case jsValue: JsValue =>
            val nextIteration = controller.completeGame(state)
            state = controller.init(nextIteration)
            // logger.info(s"JS-VALUE: $jsValue")
            logger.info("HISTORY LENGTH: " + nextIteration.history.length)
            // logger.info("STATE: " + nextIteration.toString())
            val clientMessage = getMessage(jsValue)
            // // val json: JsValue = Json.parse(s"""{"body": "You said, ‘$clientMessage’"}""")
            val json: JsValue = Json.parse(nextIteration.history.mkString("[", ",", "]"))
            // val player1CardHistory = state.history.filter(p => p.playerId == "player1" && p.afterCards != Nil).map(_.afterCards)
            // val json: JsValue = Json.parse(player1CardHistory.mkString("[", ",", "]"))
            clientActorRef ! (json)
    }

    // parse the "message" field from the json the client sends us
    def getMessage(json: JsValue): String = (json \ "message").as[String]

}
