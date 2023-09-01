import { useNotesContext } from '../contexts/NotesContext';
import { Button, IconButton, Stack } from '@mui/material';
import MyInput from '../components/MyInput';

import ArrowBack from '@mui/icons-material/ArrowBack';
import { Link, useParams } from 'react-router-dom';

const EditNote = () => {

    const { sortedNotes, editNote, handleInput } = useNotesContext();
    const { id } = useParams();
    const noteToEdit = sortedNotes.find(note => note.id === id);


    return (
        <Stack spacing={2}>
            <Stack spacing={2}>
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
            <Stack>
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
        </Stack>
    )
}

export default EditNote