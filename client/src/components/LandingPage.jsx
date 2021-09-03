import React from 'react';
import {Link} from 'react-router-dom'

export default function LandingPage(){
    return(
        <div>
            <h1>Bienvenidos a recorrer el mundo</h1>
            <Link to='/Home'>
                <button>Inicar Viaje</button>
            </Link>
        </div>
    )
}