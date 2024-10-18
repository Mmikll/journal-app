<<<<<<< HEAD
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
=======
import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components'


export const NoteView = () => {
  return (
    <Grid 
        className='animate__animated animate__fadeIn animate__faster'
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204
        container 
        direction='row' 
        justifyContent='space-between' 
        alignItems='center' 
        sx={{ mb: 1 }}
<<<<<<< HEAD
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
=======
    >
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light' >August, 28 of 2024</Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{ padding: 2 }}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204
            </Button>
        </Grid>

        <Grid container>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
<<<<<<< HEAD
                placeholder="Write a Title"
                label="Title"
                sx={{ border: 'none', mb: 1 }}
                name='title'
                value={title}
                onChange={onInputChange}
            />
=======
                placeholder="Ingrese un título"
                label="Título"
                sx={{ border: 'none', mb: 1 }}
            />

>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
<<<<<<< HEAD
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
=======
                placeholder="¿Qué sucedió en el día de hoy?"
                minRows={ 5 }
            />
        </Grid>

        {/* Image gallery */}
        <ImageGallery />

    </Grid>
  )
}
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204
