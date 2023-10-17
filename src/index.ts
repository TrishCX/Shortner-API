import { Express } from "./classes";
import app from "./app/initialApp";

const server = new Express(app);

server.register();
