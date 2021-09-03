 import React from 'react';

 export default function Card({img, name, continent}){
     return (
        <div>
            <h3>{name}</h3>
            <h5>{continent}</h5>
            <img src={img} alt="img not found" width='200px' height='150px'></img>
        </div>
     )
 }