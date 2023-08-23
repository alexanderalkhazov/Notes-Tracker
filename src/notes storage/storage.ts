import { INote } from "../interfaces/INote";

const storageKey = 'USER_NOTES';

export const saveToStorage = (notes: INote[]) => {
    localStorage.setItem(storageKey,JSON.stringify(notes));
}

export const getFromStorage = () => {
    let items = localStorage.getItem(storageKey);
    if (!items) return [];
    return JSON.parse(items);
}