import { Box, Button, Checkbox, TextField } from '@mui/material';
import './App.css';
import Notes from './components/Notes';
import { CheckBox } from '@mui/icons-material';
import { useNotesContext } from './contexts/NotesContext';


function App() {


  const { handleInput, addNote } = useNotesContext();

  return (
    <>

      <Box>
        <TextField name='title' label="Title" variant="standard" onChange={(event) => handleInput(event)} />
        <TextField name='content' label="Take a note..." variant="standard" onChange={(event) => handleInput(event)} />
        <Checkbox
          name='isChecked'
          edge='start'
          disableRipple
          onChange={(event) => handleInput(event)}
        />
        <Button onClick={addNote}>Click me to add note..</Button>
      </Box>



      <Box sx={{
        backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Notes />
      </Box>


    </>
  )
}

export default App
