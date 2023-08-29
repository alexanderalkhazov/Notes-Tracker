import { Box, Divider, IconButton, Paper, Stack, Typography } from "@mui/material";
import { Link, useParams } from 'react-router-dom';
import { useNotesContext } from "../contexts/NotesContext";
import ArrowBack from '@mui/icons-material/ArrowBack';


const NoteDetails = () => {

    const { notes } = useNotesContext();
    const { id } = useParams();
    const note = notes.find(note => note.id === id);

    return (
        <>
            {note ? (<Box>
                <Stack direction={'row'} justifyContent={'center'} sx={{ p: 2 }}>
                    <Typography variant="h5">Note Details.</Typography>
                </Stack>
                <Divider />
                <Stack direction={'column'} spacing={1} sx={{ p: 2 }}>
                    <Paper elevation={5} sx={{ minHeight: 50, p: 2, display:'flex',flexDirection:'column',gap:5}}>
                        <Typography>Title: {note.title}</Typography>         
                        <Typography>Content: {note.content}</Typography>
                    </Paper>
                </Stack>
                <Stack>
                    <Link to={'/'}>
                        <IconButton color="primary">
                            <ArrowBack />
                        </IconButton>
                    </Link>
                </Stack>
            </Box>) : (<Paper><Typography>No Note Was Found</Typography></Paper>)}

        
        </>
    )
}

export default NoteDetails