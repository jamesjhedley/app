import { Request, Response } from "express";
import datasource from "../database";
import { SampleTable } from "../entity/sampleTable";

export const ping = async (_: Request, res: Response) => {
  //TODO mock our datasource for tests
  const sampletable = await datasource.manager.findOneBy(SampleTable, {
    app_name: "playground-app",
  });

  if (sampletable) {
    res.send(
      `App is connected ${sampletable.app_name}, last updated ${sampletable.updated_at}`
    );
  } else {
    res.send(`App is not connected`);
  }
};
