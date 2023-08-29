import { createContext, useContext, useState } from "react";
import { INotesContext } from "../interfaces/INotesContext";
import { getFromStorage, saveToStorage } from "../services/storage";
import { INote } from "../interfaces/INote";
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

const NotesContext = createContext<INotesContext | null>(null);

export const NotesProvider = ({ children }: any) => {
    const [notes, setNotes] = useState<INote[]>(getFromStorage());
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
        console.log(inputValue);

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
        console.log(updatedNote);

        const newNotes = notes.map(note => note.id === noteToEdit.id ? updatedNote : note);
        setNotes(newNotes);
        saveToStorage(newNotes);
        navigate('/');
    }



    return (
        <NotesContext.Provider value={{notes, editNote, addNote, removeNote, handleInput, toggleNote }}>
            {children}
        </NotesContext.Provider>
    )
}

export const useNotesContext = () => {
    const context = useContext(NotesContext);
    if (!context) throw new Error('There was a problem getting the notes data.');
    return context;
}