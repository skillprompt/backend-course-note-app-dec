import { Request, Response, NextFunction } from "express";
import { noteService } from "../../services/note";

export function updateNoteController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const noteId = Number(req.params.noteId);
    const body = req.body;

    const note = noteService.getById(noteId);
    if (!note) {
      // res.status(404).json({
      //   message: "Note not found",
      // });
      next({
        status: 404,
        message: "Note not found",
      });
      return;
    }

    noteService.update(noteId, {
      name: body.name,
      description: body.description,
    });

    res.json({
      message: "Note updated successfully!",
    });
  } catch (error) {
    console.error("caught error", error);
    next({
      message: "Failed to update the note. Something went wrong in server!",
      status: 500,
    });
  }
}
