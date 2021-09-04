import axios from 'axios';

export function traerPaises(){
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/countries');
        return dispatch({
            type: 'GET_PAISES',
            payload: json.data
        })
    }
}

export function filterContinentes(payload){
    console.log(payload)
    return{
        type: 'FILTER_BY_REGION',
        payload
    }
}