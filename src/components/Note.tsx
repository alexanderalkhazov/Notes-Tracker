import { Box, Checkbox, Divider, IconButton, Paper, Stack, Typography } from "@mui/material";
import { INote } from "../interfaces/INote";
import { useNotesContext } from "../contexts/NotesContext";
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';


interface Props {
    note: INote;
}

const Note = ({ note }: Props) => {

    const { toggleNote, removeNote } = useNotesContext();

    return (
        <>
            <Paper elevation={6} sx={{ p: 2, mt: 1 }}>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Stack sx={{ ml: 4 }}>
                        <Typography variant="h6" sx={{
                            mb: 1,
                        }}> {note.title.substring(0, 20)}...</Typography>
                        <Divider />
                    </Stack>
                    <Stack spacing={1} direction={'row'} justifyContent={'center'} alignItems={'center'}>
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
                        <Link to={`/editnote/${note.id}`}>
                            <IconButton>
                                <EditNoteIcon />
                            </IconButton>
                        </Link>
                        <Link to={`/notedetails/${note.id}`}>
                            <IconButton>
                                <ArrowForward />
                            </IconButton>
                        </Link>
                    </Stack>
                </Box>
            </Paper>
        </>
    )
}



export default Note;