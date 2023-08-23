import { List } from "@mui/material";

import { useNotesContext } from "../contexts/NotesContext";
import Note from "./Note";



const Notes = () => {

    const { notes } = useNotesContext();

    return (
        <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
            {notes.map(note => (
                <Note key={note.id} note={note}/>
            ))}
        </List>
    )
};

export default Notes;