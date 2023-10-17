import { Express as _Express } from "express";
import { SESSION } from "../../config/index.js";
import { RequestRouter, PostRouter } from "../../routers/index.js";
import { connectMongoose } from "../../connection/index.js";

export default class Express {
  private app?: _Express;
  constructor(app: _Express) {
    this.app = app;
    this.listen();
  }

  public register() {
    this.connectDB();
    this.registerRoutes();
  }

  private async connectDB() {
    await connectMongoose();
  }

  private registerRoutes() {
    this.app?.use("/", RequestRouter);
    this.app?.use("/api", PostRouter);
  }

  private listen() {
    this.app?.listen(SESSION.port, () =>
      console.log("The server is now up and running.")
    );
  }
}
