import { List } from "@mui/material";
import { useNotesContext } from "../contexts/NotesContext";
import Note from "./Note";



const Notes = () => {

    const { notes } = useNotesContext();

    return (
        <List>
            {notes.map(note => (
                <Note key={note.id} note={note}/>
            ))}
        </List>
    )
};

export default Notes;