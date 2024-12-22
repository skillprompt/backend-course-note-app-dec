type TNote = {
  id: number;
  name: string;
  description: string;
};

let notes: TNote[] = [];

// create
function create(input: Omit<TNote, "id">) {
  notes.push({
    id: notes.length + 1,
    name: input.name,
    description: input.description,
  });
}

// update
function update(toUpdateNoteId: number, input: Omit<TNote, "id">) {
  const updatedNotes = notes.map((note) => {
    if (note.id === toUpdateNoteId) {
      return {
        id: note.id,
        name: input.name,
        description: input.description,
      };
    } else {
      return note;
    }
  });

  notes = updatedNotes;
}

// delete
function deleteNote(toDeleteNoteId: number) {
  const notesAfterDeletion = notes.filter((note) => {
    if (note.id === toDeleteNoteId) {
      return false;
    } else {
      return true;
    }
  });

  notes = notesAfterDeletion;
}

// getById
function getById(noteId: number) {
  const note = notes.find((note) => {
    if (note.id === noteId) {
      return true;
    } else {
      return false;
    }
  });
  return note;
}

// getAll
function getAll() {
  return notes;
}

export const noteService = {
  create,
  update,
  deleteNote,
  getById,
  getAll,
};
