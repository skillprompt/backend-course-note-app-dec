import { Request, Response, NextFunction } from "express";
import { noteService } from "../../services/note";

export function createNoteController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const body = req.body;

  noteService.create({
    name: body.name,
    description: body.description,
  });

  res.json({
    message: "Note created successfully!",
  });
}
