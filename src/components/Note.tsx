import MyCheckBox from "./MyCheckbox";
import { Box, Divider, IconButton, Card, CardContent, Typography, CardActions, Stack } from "@mui/material";
import { useNotesContext } from "../contexts/NotesContext";
import { INote } from "../interfaces/INote";
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ArrowForward from '@mui/icons-material/ArrowForward';


interface Props {
    note: INote;
}

const Note = ({ note }: Props) => {

    const { toggleNote, removeNote } = useNotesContext();

    const formatTitle = () => {
        return `${note.title.substring(0, 25)}...`;
    }

    return (
        <Box>
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
                    <Stack
                        direction={'row'}
                        alignItems={'center'}
                    >
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
                    </Stack>
                </CardActions>

            </Card>
        </Box>
    )
}



export default Note;