import React from 'react';
import {Link} from 'react-router-dom'
import style from './LandingPage.module.css'

export default function LandingPage(){
    return(
        <div className={style.div}>
            <h1 className={style.h1}>BIENVENIDOS A RECORRER EL MUNDO</h1>
            <Link to='/Home'>
                <button className={style.button}>Iniciar Viaje</button>
            </Link>
        </div>
    )
}