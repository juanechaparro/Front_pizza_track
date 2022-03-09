import {  useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);
    
    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }) => {
        
       
        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    return [ values, handleInputChange, reset ];

}
export const useFormCheckBox = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);
    
    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }) => {
        
        if (!target.checked){
            setValues((previousState) => {
                const newState ={ ...previousState}
                delete newState[ target.name ] ;
                return newState;
              });
        }
        else{
        setValues({
            ...values,
            [ target.name ]: target.value
        });}

    }

    return [ values, handleInputChange, reset ];

}