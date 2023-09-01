import Note from "./Note";
import { useNotesContext } from "../contexts/NotesContext";
import { Stack } from "@mui/material";

const Notes = () => {

    const { sortedNotes } = useNotesContext();

    return (
        <Stack spacing={1}>
            {sortedNotes.map(note => (
                <Note key={note.id} note={note}/>
            ))}
        </Stack>
    )
};

export default Notes;