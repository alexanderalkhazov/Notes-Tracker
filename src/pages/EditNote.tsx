import { useNotesContext } from '../contexts/NotesContext';
import { IconButton, Stack, Typography } from '@mui/material';
import MyInput from '../components/MyInput';
import MyCheckBox from '../components/MyCheckbox';
import MyButton from '../components/MyButton';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { Link, useParams } from 'react-router-dom';

const EditNote = () => {

    const { notes, editNote, handleInput } = useNotesContext();
    const { id } = useParams();
    const noteToEdit = notes.find(note => note.id === id);
    

    return (
        <form>
            <Stack direction={'column'} spacing={2}>
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
            <Stack direction={'row'} alignItems={'center'} spacing={1}>
                <Typography>Importance:</Typography>
                <MyCheckBox handleChange={handleInput} name="isChecked" edge={'start'} />
            </Stack>
            <Stack>
                <MyButton
                    innerText="Submit"
                    variant={'contained'}
                    buttonColor={'primary'}
                    handleClick={() => editNote(noteToEdit!)}
                />
            </Stack>
            <Stack>
                    <Link to={'/'}>
                        <IconButton color="primary">
                            <ArrowBack />
                        </IconButton>
                    </Link>
                </Stack>
        </form>
    )
}

export default EditNote