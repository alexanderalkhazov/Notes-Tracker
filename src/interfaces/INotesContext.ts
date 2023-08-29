import { INote } from "./INote";

export interface INotesContext {
    notes: INote[];
    addNote: () => void;
    editNote: (note: INote) => void;
    removeNote: (id: string) => void;
    handleInput: (event: React.ChangeEvent) => void;
    toggleNote: (id: string) => void;
}

