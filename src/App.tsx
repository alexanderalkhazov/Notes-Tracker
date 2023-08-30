import './App.css';
import Feed from './pages/Feed';
import AddNote from './pages/AddNote';
import EditNote from './pages/EditNote';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import NoteDetails from './pages/NoteDetails';


function App() {

  return (
    <>

      <Container maxWidth={'xs'} className='App' sx={{
        overflow: 'auto',
        marginTop: 4,
      }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/addnote' element={<AddNote />} />
          <Route path='/editnote/:id' element={<EditNote />} />
          <Route path='/notedetails/:id' element={<NoteDetails />} />
        </Routes>
      </Container>

    </>
  )
}

export default App
