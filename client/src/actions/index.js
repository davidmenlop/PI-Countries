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
    //console.log(payload)
    return{
        type: 'FILTER_BY_REGION',
        payload
    }
}

export function detallePais(id){
    return async function(dispatch){
        var pais = await axios.get('http://localhost:3001/countries/'+id);
        console.log(pais)
        return dispatch({
            type: 'GET_DETAIL',
            payload: pais.data
        })
    }
}

export function detallePaises(name){
    return async function(dispatch){
        try{
          var queryPaises = await axios.get('http://localhost:3001/countries?name=' + name);  
          return dispatch({
              type: 'GET_QUERY_COUNTRY',
              payload: queryPaises.data
          })
        } catch(err){
            console.log(err)
        }
        
    }
}