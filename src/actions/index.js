import axios from 'axios'

export const SHOW_PHONES = 'SHOW_PHONES'

export function showPhones() {
    
    return (dispatch, getState) => {
        // Llamada una vez ejecutado con json-server phones.json
         axios.get('http://localhost:3000/phones')
            .then((response) => {
                console.log(response)
                dispatch( { type: SHOW_PHONES, payload: response.data } ) 
            }) 
    }
} 
