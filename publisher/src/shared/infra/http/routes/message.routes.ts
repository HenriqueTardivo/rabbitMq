import { Router } from "express";
import { MessageController } from "../../../../modules/Message/MessageController";

const  messageController = new MessageController()

const messageRoutes = Router();

messageRoutes.post("/", messageController.handle)

export { messageRoutes }
