package controllers

import play.api.mvc._
import play.api.libs.streams.ActorFlow
import javax.inject.Inject
import akka.actor.ActorSystem
import akka.stream.Materializer
import models.web.BlackjackWebSocketActor
import play.api.libs.json._
// import cards.modules.Blackjack
// import cards.classes.bettingstrategy.BlackjackBettingStrategy


// the ‘implicit’ here is needed for the `ActorFlow.actorRef` below.
// i thought a Materializer was needed, but it is not.
// class WebSocketsController @Inject() (cc: ControllerComponents)(implicit system: ActorSystem, mat: Materializer)
class WebSocketsController @Inject() (cc: ControllerComponents)(implicit system: ActorSystem)
extends AbstractController(cc)
{
    val logger = play.api.Logger(getClass)

    // val controller = Blackjack
    // var state = controller.init(2, 2000)
    // state = controller.next(state, 1000, true) // for initial walking skeleton simply make 1000 moves initially for 2 players with 2000 each...

    // this method displays the index.scala.html page/template
    def index = Action { implicit request: Request[AnyContent] =>
        logger.info("index page was called")
        Ok(views.html.index())
    }

    // our WebSocket. DOCS on WebSocket.accept:
    // def accept[In, Out](f: RequestHeader => Flow[In, Out, _])(implicit transformer: WebSocket.MessageFlowTransformer[In,Out]): WebSocket
    // Accepts a WebSocket using the given flow.
    def ws = WebSocket.accept[JsValue, JsValue] { requestHeader =>
        logger.info("'ws' function is called")
        ActorFlow.actorRef { actorRef =>
            logger.info("ws: calling My Actor")
            BlackjackWebSocketActor.props(actorRef)
        }
    }

}



