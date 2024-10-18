<<<<<<< HEAD
import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {}) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation ] = useState({});

    useEffect(() => {
        createValidators();
    }, [ formState ])

    useEffect(() => {
        setFormState( initialForm );
    }, [ initialForm ])
    
    
    const isFormValid = useMemo( () => {

        for (const formValue of Object.keys( formValidation )) {
            if ( formValidation[formValue] !== null ) return false;
        }

        return true;
    }, [ formValidation ])

=======
import { useState, useEffect, useMemo } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setFormValidation] = useState({})

    useEffect(() => {
        createValidators()
    }, [formState]);

    const isFormValid = useMemo( ()=>  {

        for (const formValue in formValidation) {
            if( formValidation[formValue] !== null) return false;

            return true;
        }
    },[formValidation])
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

<<<<<<< HEAD
    const createValidators = () => {
        
        const formCheckedValues = {};
        
        for (const formField of Object.keys( formValidations )) {
            const [ fn, errorMessage ] = formValidations[formField];

            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }

        setFormValidation( formCheckedValues );
    }



=======
    const createValidators = () =>{

        const formCheckedValues = {}
        
        for (const formField  in formValidations) {

            const [fn, errorMessage = 'Este campo es requerido'] = formValidations[formField]
            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage

            setFormValidation(formCheckedValues)

        }

    }

>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
<<<<<<< HEAD

        ...formValidation,
        isFormValid
=======
        ...formValidation,
        isFormValid,
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204
    }
}