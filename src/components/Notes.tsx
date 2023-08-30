import { useNotesContext } from "../contexts/NotesContext";
import Note from "./Note";

const Notes = () => {

    const { notes } = useNotesContext();

    return (
        <>
            {notes.map(note => (
                <Note key={note.id} note={note}/>
            ))}
        </>
    )
};

export default Notes;