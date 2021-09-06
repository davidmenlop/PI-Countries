import React from 'react';
import { useSelector } from 'react-redux';

export default function Detail(id){
    const paises = useSelector(store => store.detail)
    return(
        <div>
            {
                paises.length > 0 ?
                <div>
                    <img src={paises[0].flag} alt="img not found" width='200px' height='100px'/>
                    <h5>{paises[0].id}</h5>
                    <h4>{paises[0].name}</h4>
                    <h3>{paises[0].capital}</h3>
                    <h3>{paises[0].subregion}</h3>
                    <h3>{paises[0].area}</h3>
                    <h3>{paises[0].population}</h3>
                    <h3>Actividades : {paises[0].activities?.map(actividad =>(
                        <table><tr>
                        <td><h5>{actividad.name}</h5></td>
                        <td><h5>Duracion: {actividad.time}</h5></td>
                        <td><h5>Dificultad: {actividad.level}</h5></td>
                        <td><h5>Temporada: {actividad.season}</h5></td>
                        </tr></table>
                    ))}</h3>
                </div> : <h2>Cargando...</h2>
            }
        </div>
    )
}