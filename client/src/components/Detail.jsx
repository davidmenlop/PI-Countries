import React from "react";
import { useSelector } from "react-redux";
import style from "./Detail.module.css";
import { Link } from "react-router-dom";

export default function Detail(id) {
  const paises = useSelector((store) => store.detail);
  return (
    <div className={style.box}>
      <Link to="/home">
        {" "}
        <button className={style.button}>Inicio</button>
      </Link>

      {paises.length > 0 ? (
        <div className={style.info}>
          <div>
            <img
              className={style.img}
              src={paises[0].flag}
              alt="img not found"
            />
            <h5>{paises[0].id}</h5>
            <h4>{paises[0].name}</h4>
          </div>
          <div className={style.text}>
            <label htmlFor="">Capital:</label>
            <h3 className={style.h3}>{paises[0].capital}</h3>
            <label htmlFor="">Continente:</label>
            <h3 className={style.h3}>{paises[0].subregion}</h3>
            <label htmlFor="">Area:</label>
            <h3 className={style.h3}>{paises[0].area}</h3>
            <label htmlFor="">Poblacion:</label>
            <h3 className={style.h3}>{paises[0].population}</h3>
          </div>
          <div >
            <h3>
              Actividades :{" "}
              {paises[0].activities?.map((actividad) => (
                <table>
                    <td></td>
                  <td className={style.actividad}>
                    <h5 >{actividad.name}</h5>
                  </td>
                  <td></td>
                  <tr>
                    <td>
                      <h5>Duracion: {actividad.time}</h5>
                    </td>
                    <td>
                      <h5>Dificultad: {actividad.level}</h5>
                    </td>
                    <td>
                      <h5>Temporada: {actividad.season}</h5>
                    </td>
                  </tr>
                </table>
              ))}
            </h3>
          </div>
        </div>
      ) : (
        <h2>Cargando...</h2>
      )}
    </div>
  );
}
