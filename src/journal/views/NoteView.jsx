import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components'
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useRef } from 'react';
import { startSaveNote, setActiveNote, startUploadingFiles, startDeletingNote  } from '../../store/journal';
import Swal from 'sweetalert2';


export const NoteView = () => {

    const dispatch = useDispatch()

    const { active:note, messageSaved, isSaving} = useSelector( state => state.journal)

    const {title, body, date, onInputChange, formState} = useForm(note)

    const dateString = useMemo(() =>{
        const newDate = new Date( date).toUTCString().slice(0,11)
        return newDate
    }, [date])

    const fileInputRef = useRef()

    useEffect(() => {
        dispatch( setActiveNote(formState))
    }, [formState])
    
    const onSaveNote = () =>{
        dispatch(startSaveNote())
    }
    useEffect(() => {
        if(messageSaved.length > 0){
            Swal.fire("Updated Successfuly", messageSaved, "success")
        }
        
    }, [messageSaved])

    const onFileInputChange = ({target}) =>{
        if ( target.files === 0 ) return

        dispatch(startUploadingFiles(target.files))
}
    
    const onDelete = () =>{
        dispatch(startDeletingNote())
    }

  return (
    <Grid 
        container 
        direction='row' 
        justifyContent='space-between' 
        alignItems='center' 
        sx={{ mb: 1 }}
        className='animate__animated animate__fadeIn animate__faster'
    >
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light' >{dateString}</Typography>
        </Grid>
        <Grid item>

            <input 
                type="file" 
                multiple
                onChange={onFileInputChange}
                style={{ display : "none"}}
                ref={fileInputRef}
            />
            {
            }
            <IconButton
                color='primary'
                disabled={isSaving}
                onClick={ () => fileInputRef.current.click() }    
            >
                <UploadOutlined/>
            </IconButton>

            <Button 
                disabled={ isSaving }
                color="primary" 
                sx={{ padding: 2 }}
                onClick={onSaveNote}
            >
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Save
            </Button>
        </Grid>

        <Grid container>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Write a Title"
                label="Title"
                sx={{ border: 'none', mb: 1 }}
                name='title'
                value={title}
                onChange={onInputChange}
            />
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="What happened today?"
                minRows={ 5 }
                name='body'
                value={body}
                onChange={onInputChange}
            />
        </Grid>

        <Grid 
            container
            justifyContent='end'>
            <Button
                onClick={onDelete}
                sx={{mt:2}}
                color='error'
            />
            <DeleteOutline/>
                Delete
        </Grid>

        <ImageGallery images={note.imageUrls}/>

    </Grid>
  )
}