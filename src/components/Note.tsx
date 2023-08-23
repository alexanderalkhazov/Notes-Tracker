import { Checkbox, Divider, IconButton, ListItem, Typography } from "@mui/material";
import { INote } from "../interfaces/INote";
import { useNotesContext } from "../contexts/NotesContext";
import DeleteIcon from '@mui/icons-material/Delete';


interface Props {
    note: INote;
}

const Note = ({ note }: Props) => {

    const { toggleNote, removeNote } = useNotesContext();

    return (
        <>
            <ListItem alignItems="flex-start">
                <Typography>
                    {note.id}
                </Typography>
                <Typography>
                    {note.title}
                </Typography>
                <Typography>
                    {note.content}
                </Typography>
                <Checkbox
                    edge='start'
                    checked={note.isChecked}
                    tabIndex={-1}
                    disableRipple
                    onChange={() => toggleNote(note.id)}
                />
                <IconButton edge="end" aria-label="delete" onClick={() => removeNote(note.id)}>
                    <DeleteIcon />
                </IconButton>
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}



export default Note;