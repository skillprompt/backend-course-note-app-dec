import { Request, Response, NextFunction } from "express";
import { noteService } from "../../services/note";
import { InvalidNotePayload } from "../../services/note-errors";

export function createNoteController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const body = req.body;

  if (!body.name.length) {
    const invalidPayloadError = new InvalidNotePayload();
    next(invalidPayloadError);
    return;
  }

  noteService.create({
    name: body.name,
    description: body.description,
  });

  res.json({
    message: "Note created successfully!",
  });
}
