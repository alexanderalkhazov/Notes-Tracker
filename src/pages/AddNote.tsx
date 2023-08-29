import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import MyInput from "../components/MyInput";
import MyCheckBox from "../components/MyCheckbox";
import { useNotesContext } from "../contexts/NotesContext";
import { Link } from 'react-router-dom';
import ArrowBack from '@mui/icons-material/ArrowBack';



const AddNote = () => {

    const { addNote, handleInput } = useNotesContext();

    return (
        <Box>
            <Stack
                direction={'column'}
                spacing={2}
            >
                <MyInput
                    handleChange={handleInput}
                    isRequired={true}
                    size={'small'}
                    name={'title'}
                    label={"Title"}
                    variant="outlined"
                />
                <MyInput
                    handleChange={handleInput}
                    isRequired={true}
                    size={'small'}
                    name={'content'}
                    label={"Content"}
                    variant="outlined"
                />
            </Stack>
            <Stack
                direction={'row'}
                alignItems={'center'}
                spacing={1}
            >
                <Typography>Importance:</Typography>

                <MyCheckBox
                    handleChange={handleInput}
                    name="isChecked"
                    edge={'start'}
                />

            </Stack>

            <Stack>
                <Button variant={'contained'} onClick={addNote}>Submit</Button>
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

export default AddNote