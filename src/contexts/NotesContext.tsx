import { createContext, useContext, useEffect, useState } from "react";
import { INotesContext } from "../interfaces/INotesContext";
import { getFromStorage, saveToStorage } from "../services/storage";
import { INote } from "../interfaces/INote";
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

const NotesContext = createContext<INotesContext | null>(null);

export const NotesProvider = ({ children }: any) => {
    const [notes, setNotes] = useState<INote[] | []>(getFromStorage());

    const [sortedNotes,setSortedNotes] = useState<INote[] | []>([]);

    useEffect(() => {

        const sortedArray = notes.sort((note1:INote, note2:INote) => {
            if (note1.isChecked === note2.isChecked) {
                return 0; // No change in order
              } else if (note1.isChecked) {
                return -1; // a should come before b
              } else {
                return 1; // b should come before a
              }
        })
        setSortedNotes(sortedArray);
    },[notes])

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        title: '',
        content: '',
        isChecked: false
    });

    const addNote = () => {
        const newNote: INote = {
            id: uuid(),
            title: inputs.title,
            content: inputs.content,
            isChecked: inputs.isChecked
        }
        saveToStorage([...notes, newNote]);
        setNotes([...notes, newNote]);
        navigate('/');
    }

    const removeNote = (id: string) => {
        const updatedList = notes.filter(note => note.id !== id);
        setNotes(updatedList);
        saveToStorage(updatedList);
    }

    const handleInput = (event: any) => {
        const { name, value, type, checked } = event.target;
        const inputValue = type === 'checkbox' ? checked : value;
        setInputs({
            ...inputs,
            [name]: inputValue
        });
    }

    const toggleNote = (id: string) => {
        const updatedNotes = notes.map(note => note.id === id ? { ...note, isChecked: !note.isChecked } : note);
        setNotes(updatedNotes);
        saveToStorage(updatedNotes);
    }

    const editNote = (noteToEdit: INote) => {
        const updatedNote = {
            ...noteToEdit,
            title: inputs.title,
            content: inputs.content,
            isChecked: inputs.isChecked
        }
        const newNotes = notes.map(note => note.id === noteToEdit.id ? updatedNote : note);
        setNotes(newNotes);
        saveToStorage(newNotes);
        navigate('/');
    }



    return (
        <NotesContext.Provider value={
            {
                sortedNotes,
                editNote,
                addNote,
                removeNote,
                handleInput,
                toggleNote
            }}>
            {children}
        </NotesContext.Provider>
    )
}

export const useNotesContext = () => {
    const context = useContext(NotesContext);
    if (!context) throw new Error('There was a problem getting the notes data.');
    return context;
}