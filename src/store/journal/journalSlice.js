import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: { 
        isSaving: false,
        messageSaved: '',
        notes : [],
        active: null,
        //{
        //     id: 'asca',
        //     title: '',
        //     body: '',
        //     date: 1234,
        //     imageUrls: []// https://photo1.jpg
        // }
    },
    reducers: { 
        savingNewNote : (state) => {
            state.isSaving = true
        },
        addNewEmptyNote: (state, action) =>{
            state.notes.push(action.payload)
            state.isSaving = false
        },
        setActiveNote: (state, action) =>{
            state.active = action.payload
        },
        setNote: (state, action) =>{
            state.notes.push(action.payload)
        },
        setSaving: (state) =>{

        },
        updateNote: (state, action) =>{
            
        },
        deleteNoteById: (state, action) =>{

        },
    },
});

export const {
    addNewEmptyNote,
    setActiveNote,
    setNote, 
    setSaving, 
    updateNote, 
    deleteNoteById,
    savingNewNote } = journalSlice.actions;