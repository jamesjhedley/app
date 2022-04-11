import express from "express";
import router from "./router";

export default {
  start: async () => {
    const app = express();
    const port = process.env.PORT;

    app.use(express.json());
    app.use("/", router);
    app.listen(port, () => {
      console.log(`server started at http://localhost:${port}`);
    });
  },
};
