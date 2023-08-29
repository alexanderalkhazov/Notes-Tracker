import { useNotesContext } from '../contexts/NotesContext';
import { Box, Button, IconButton, Stack } from '@mui/material';
import MyInput from '../components/MyInput';

import ArrowBack from '@mui/icons-material/ArrowBack';
import { Link, useParams } from 'react-router-dom';

const EditNote = () => {

    const { notes, editNote, handleInput } = useNotesContext();
    const { id } = useParams();
    const noteToEdit = notes.find(note => note.id === id);


    return (
        <Box>
            <Stack
                direction={'column'}
                spacing={2}
            >
                <MyInput
                    handleChange={handleInput}
                    isRequired={true} size={'small'}
                    name={'title'} label={"Title"}
                    variant="outlined"
                />
                <MyInput
                    handleChange={handleInput}
                    isRequired={true}
                    size={'small'}
                    name={'content'}
                    label={"Context"}
                    variant="outlined"
                />
            </Stack>
            <Stack
                sx={{ mt: 2 }}
            >
                <Button
                    variant={'contained'}
                    onClick={() => editNote(noteToEdit!)}
                >
                    Submit
                </Button>
            </Stack>
            <Stack>
                <Link to={'/'}>
                    <IconButton color="primary">
                        <ArrowBack />
                    </IconButton>
                </Link>
            </Stack>
        </Box>
    )
}

export default EditNote