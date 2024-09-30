import { useState } from 'react';

export const AddCategory = ({ newSerchCategory } : any) => {
    
    // useState Input
    const [ inputValue, setinputValue ] = useState('');
    
    const onInputClear= ({ target } : any) => {
        setinputValue(target.value = '' );
    }
    const onInputChange = ({ target } : any) => {
        setinputValue(target.value);
    }
    
    const onSubmitEvent = (event : any) => {
        event.preventDefault();
        // console.log(inputValue);
        // If to validate dont full it the fill with white spaces
        if (inputValue.trim().length <= 1) return;
        // Send new serch
        newSerchCategory(inputValue.trim());
        // Clear the fill
        setinputValue('');
    }
    

  return (
    <form onSubmit={ (event) => onSubmitEvent(event) }>
        <input 
            type="text"
            placeholder="Serch Gifs"
            value={inputValue}
            onClick={ (event) => onInputClear(event) }
            onChange={ (event) => onInputChange(event) }
        />
    </form>
  )
}
