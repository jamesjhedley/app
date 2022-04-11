import { Request, Response } from "express";
// import datasource from "../database";
// import { Message } from "../entity/message";

export const messageBoard = async (req: Request, res: Response) => {
  const messageBoardId = req.params.id;
  // const rawData = await datasource.manager.query(
  //   `select * from message where message_board_id = ${messageBoardId};`
  // );

  // const messages = await datasource.manager
  //   .createQueryBuilder()
  //   .select()
  //   .from(Message, "message")
  //   .where("message_board_id = :id", { id: parseInt(messageBoardId) })
  //   .getMany();

  res.send(messageBoardId);
};
