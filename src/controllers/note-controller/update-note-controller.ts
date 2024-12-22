import { Request, Response, NextFunction } from "express";
import { noteService } from "../../services/note";

export function updateNoteController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const noteId = Number(req.params.noteId);
  const body = req.body;

  noteService.update(noteId, {
    name: body.name,
    description: body.description,
  });

  res.json({
    message: "Note updated successfully!",
  });
}
