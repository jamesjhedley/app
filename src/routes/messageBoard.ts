import { Request, Response } from "express";
import datasource from "../database";
import { Message } from "../entity/message";

export const messageBoard = async (req: Request, res: Response) => {
  const messageBoardId = req.query.id;

  if (!messageBoardId) {
    res.status(400);
    res.send("Endpoint requires an id.");
    return;
  }

  const messageRepository = datasource.getRepository(Message);
  const messages = await messageRepository.findBy({
    message_board_id: parseInt(messageBoardId as string),
  });

  res.send(messages);
};
