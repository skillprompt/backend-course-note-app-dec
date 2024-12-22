import express from "express";
import { homeController } from "./controllers/home-controller";
import { createNoteRoutes } from "./routes/note-route";

const app = express();

// json parser
app.use(express.json());

app.get("/", homeController);

// notes routes
createNoteRoutes(app);

app.listen(4001, () => {
  console.log("Server started on http://localhost:4001");
});
