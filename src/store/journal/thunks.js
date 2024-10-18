
import { FirebaseDB } from '../../firebase/config'
import { doc, collection, setDoc, deleteDoc } from 'firebase/firestore/lite';
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNote, setPhotosToActiveNote, setSaving, updateNote } from './';
import { fileUpload, loadNotes } from '../../helpers';

export const startNewNote = () =>{
    return async(dispatch, getState) =>{

        dispatch(savingNewNote())

        const { uid } = getState().auth

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        try {

            const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes` ))
        
            await setDoc( newDoc, newNote)
    
            newNote.id = newDoc.id

            dispatch(addNewEmptyNote(newNote))

            dispatch(setActiveNote(newNote))
    

        } catch (err) {
            console.log(err)
        }

        
    }
}

export const startLoadingNotes = () => {
    return async ( dispatch, getState ) => {

        const { uid } = getState().auth

        if ( !uid ) throw new Error( " UID doesn't exist")

        const notes = await loadNotes(uid)

        dispatch(setNote(notes))
        
    }
}

export const startSaveNote = () =>{
    return async ( dispatch, getState ) =>{

        dispatch( setSaving() )

        try {
            const { uid } = getState().auth

            const { active:note } = getState().journal
    
            const noteToFirestore = {...note}
            
            delete noteToFirestore.id
    
            const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)
    
            await setDoc( docRef, noteToFirestore, { merge : true}) 

            dispatch(updateNote(note))

        } catch (err) {
            console.log(err)
        }
    }
}

export const startUploadingFiles = (files = []) =>{
    return async ( dispatch ) =>{
        dispatch( setSaving() )
        
        //await fileUpload( files[0] )

        const fileUploadPromises = []

        for (const file of files) {
            fileUploadPromises.push( fileUpload( file ))
        }

        const photosUrls = await Promise.all(fileUploadPromises)

        dispatch( setPhotosToActiveNote(photosUrls))
    }
} 

export const startDeletingNote = () =>{
    return async ( dispatch, getState ) =>{

        const {uid} = getState().auth
        const {active:note} = getState().journal

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)

        await deleteDoc(docRef)

        dispatch( deleteNoteById(note.id))
    }
}