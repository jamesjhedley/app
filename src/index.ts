import dotenv from "dotenv";
import server from "./server";

const destroy = () => {
  console.log("Destroying app...");
  process.exit(1);
};

const handleUncaughtException = (err: Error) => {
  console.log("Uncaught exception encountered:", err);
  destroy();
};

const handleSignal = () => {
  console.log("Unexpected signal");
  destroy();
};

// Application is in an undefined state. Destroy it.
process.on("unhandledRejection", handleUncaughtException);
process.on("uncaughtException", handleUncaughtException);
process.on("SIGINT", handleSignal);
process.on("SIGTERM", handleSignal);

dotenv.config();

server.start();
