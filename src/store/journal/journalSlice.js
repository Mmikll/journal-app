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
            state.messageSaved = ''
        },
        setNote: (state, action) =>{
            state.notes = action.payload
        },
        setSaving: (state) =>{
            state.isSaving = true
            state.messageSaved = ''
        },
        updateNote: (state, action) =>{
            state.isSaving = false
            state.notes = state.notes.map( note => (
                (action?.payload?.id === note?.id) 
                    ? note = {...action.payload}
                    : note
            ))
            state.messageSaved = `${action.payload.title} Now Is Saved`
        },
        setPhotosToActiveNote : (state, action) =>{
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload]
            state.isSaving = false
        },
        clearNotesLogout : (state) =>{
            state.isSaving = false
            state.messageSaved = ''
            state.notes = []
            state.active = null
        },
        deleteNoteById: (state, action) =>{
            state.active = null
            state.notes = state.notes.filter( note => (
                action?.payload != note?.id
            ))
        },
    },
});

export const {
    addNewEmptyNote,
    clearNotesLogout, 
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNote, 
    setPhotosToActiveNote,
    setSaving, 
    updateNote, 
} = journalSlice.actions;