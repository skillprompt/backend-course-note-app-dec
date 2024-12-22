import { Request, Response, NextFunction } from "express";
import { noteService } from "../../services/note";

export function deleteNoteController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const noteId = Number(req.params.noteId);

  noteService.deleteNote(noteId);

  res.json({
    message: "Note deleted successfully!",
  });
}
