import { Request, Response } from "express";
import datasource from "../database";
import { Message } from "../entity/message";

export const addMessage = async (req: Request, res: Response) => {
  await datasource.manager.insert(Message, {
    message_board_id: req.body.message_board_id,
    parent_message_id: req.body.parent_message_id,
    message: req.body.message,
  });

  res.send("It works!!");

  // if (sampletable) {
  //   res.send(
  //     `App is connected ${sampletable.app_name}, last updated ${sampletable.updated_at}`
  //   );
  // } else {
  //   res.send(`App is not connected`);
  // }
};
