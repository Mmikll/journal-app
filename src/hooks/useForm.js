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

    const createValidators = () =>{

        const formCheckedValues = {}
        
        for (const formField  in formValidations) {

            const [fn, errorMessage = 'Este campo es requerido'] = formValidations[formField]
            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage

            setFormValidation(formCheckedValues)

        }

    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid,
    }
}