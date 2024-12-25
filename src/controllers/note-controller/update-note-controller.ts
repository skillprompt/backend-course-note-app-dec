import { Request, Response, NextFunction } from "express";
import { noteService } from "../../services/note";
import { InvalidNotePayload, NoteNotFound } from "../../services/note-errors";
import { AppError } from "../../error";

export function updateNoteController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const noteId = Number(req.params.noteId);
    const body = req.body;

    if (typeof body.priority !== "number") {
      const invalidPayloadError = new InvalidNotePayload({
        mesage: "Priority should be a number",
      });
      next(invalidPayloadError);
      return;
    }

    const note = noteService.getById(noteId);
    if (!note) {
      const noteNotFoundError = new NoteNotFound();
      next(noteNotFoundError);
      return;
    }

    noteService.update(noteId, {
      name: body.name,
      description: body.description,
      priority: body.priority,
    });

    res.json({
      message: "Note updated successfully!",
    });
  } catch (error) {
    const appError = new AppError(
      "Failed to update the note. Something went wrong in server!",
      500
    );
    next(appError);
  }
}
