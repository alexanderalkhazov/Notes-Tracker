import { Box, Divider, IconButton, Card, CardContent, Typography, CardActions } from "@mui/material";
import { INote } from "../interfaces/INote";
import { useNotesContext } from "../contexts/NotesContext";
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import MyCheckBox from "./MyCheckbox";


interface Props {
    note: INote;
}

const Note = ({ note }: Props) => {

    const { toggleNote, removeNote } = useNotesContext();

    const formatTitle = () => {
        return `${note.title.substring(0, 20)}...`;
    }

    return (
        <>
            <Box width={300}>
                <Card>
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h6"
                        >
                            {formatTitle()}
                        </Typography>
                        {note.isChecked ? (<Divider sx={{ backgroundColor: 'red' }} />) : (<Divider />)}
                    </CardContent>

                    <CardActions>
                        <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => removeNote(note.id)}
                        >
                            <DeleteIcon />
                        </IconButton>

                        <Link to={`/editnote/${note.id}`}>
                            <IconButton>
                                <EditNoteIcon />
                            </IconButton>
                        </Link>
                        <MyCheckBox
                            name="isChecked"
                            edge='start'
                            isChecked={note.isChecked}
                            handleChange={() => toggleNote(note.id)}
                        />

                        <Link to={`/notedetails/${note.id}`}>
                            <IconButton>
                                <ArrowForward />
                            </IconButton>
                        </Link>

                    </CardActions>

                </Card>
            </Box>
        </>
    )
}



export default Note;