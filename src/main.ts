import express, { NextFunction, Request, Response } from "express";
import { homeController } from "./controllers/home-controller";
import { createNoteRoutes } from "./routes/note-route";
import { AppError } from "./error";

const app = express();

// json parser
app.use(express.json());

app.get("/", homeController);

// notes routes
createNoteRoutes(app);

// global error handler
app.use((error: AppError, req: Request, res: Response, next: NextFunction) => {
  console.error("Caught error:::", error);
  res.status(error.status || 500).json({
    message: error.message,
  });
});

app.listen(4001, () => {
  console.log("Server started on http://localhost:4001");
});
