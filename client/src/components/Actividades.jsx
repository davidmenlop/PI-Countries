import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import style from "./ActivityCreate.module.css";
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom'


export default function ActivityCreate() {
  const countries = useSelector((state) => state.allContinentes);
  const history = useHistory();
  const [validate, setValidate] = useState({});

  const [activity, setActivity] = useState({
    name: "",
    level: "1",
    time: "",
    season: "Verano",
    pais: "",
    paises: [],
  });

  function onInputChange(e) {
    setActivity(() => {
      return {
        ...activity,
        [e.target.name]: e.target.value,
      };
    });
  }

  function agregarPais() {
    var aux = countries.filter((e) => e.name === activity.pais);
    if (activity.paises.length === 0) {
      setActivity({
        ...activity,
        paises: [...activity.paises, aux[0].id],
      });
      console.log(activity.paises, "primer pais");
    } else {
      console.log("son mas de uno");
      let flag = false;
      for (let i = 0; i < activity.paises.length; i++) {
        if (activity.paises[i] === aux[0].id) {
          flag = true;
        }
      }
      if (flag === false) {
        setActivity({
          ...activity,
          paises: [...activity.paises, aux[0].id],
        });
      }
    }
    console.log(activity.paises);
  }

  function borrarPais(id) {
    console.log(id, "id de borrar");
    setActivity({
      ...activity,
      paises: [...activity.paises.filter((el) => el !== id)],
    });
    console.log(activity.paises, "ya borrado");
  }
  async function handleSubmit(e) {
    e.preventDefault();
    var info = error(activity);
    if (Object.keys(info).length !== 0) {
      setValidate(info);
    } else {
      try {
        await axios.post("http://localhost:3001/actividades", activity);
        alert("Actividad Creada");
        setActivity({
          name: "",
          level: "1",
          time: "",
          season: "Verano",
          pais: "",
          paises: [],
        });
      } catch (err) {
        console.log(err);
      }
    }
    history.push('/home')
  }

  function cancelar() {
    setActivity({
      name: "",
      level: "1",
      time: "",
      season: "Verano",
      pais: "",
      paises: [],
    });
  }

  //const { name, dificultad, duracion, temporada } = req.body;
  return (
    <div>
      <div className={style.box}>
        <h2 className={style.title}>Crear Actividad Turistica</h2>

        <form onSubmit={(e) => handleSubmit(e)} className={style.ent}>
          <label htmlFor=""> Nombre:</label>
          <input
            type="text"
            value={activity.name}
            name="name"
            onChange={(e) => onInputChange(e)}
          />
          {validate.name && <h5>{validate.name}</h5>} <br /> <br />
          <label>Dificultad:</label>
          <select name="dificultad" onChange={(e) => onInputChange(e)}>
            <option name="dificultad" value="1">
              {" "}
              1{" "}
            </option>
            <option name="dificultad" value="2">
              {" "}
              2{" "}
            </option>
            <option name="dificultad" value="3">
              {" "}
              3{" "}
            </option>
            <option name="dificultad" value="4">
              {" "}
              4{" "}
            </option>
            <option name="dificultad" value="5">
              {" "}
              5{" "}
            </option>
          </select>{" "}
          <br />
          <br />
          <label>Duracion:</label>
          <input
            type="number"
            value={activity.time}
            name="time"
            placeholder="tiempo de duracion de la actividad"
            onChange={(e) => onInputChange(e)}
          />{" "}
          <span> minutos </span> <br />
          <br />
          {validate.time && <h5>{validate.time}</h5>}
          <label>Temporada:</label>
          <select name="season" onChange={(e) => onInputChange(e)}>
            <option name="season" value="Verano">
              {" "}
              Verano{" "}
            </option>
            <option name="season" value="Otoño">
              {" "}
              Otoño{" "}
            </option>
            <option name="season" value="Invierno">
              {" "}
              Invierno{" "}
            </option>
            <option name="season" value="Primavera">
              {" "}
              Primavera{" "}
            </option>
          </select>
        </form>
      </div>
      <table key={activity.name} className={style.table}>
        <label>Paises donde se realiza:</label>
        <input
          type="datalist"
          name="pais"
          list="paises"
          value={activity.pais}
          onChange={(e) => onInputChange(e)}
        />
        <datalist id="paises">
          {countries &&
            countries.map((e) => <option key={e.id} value={e.name} />)}
        </datalist>
        <button onClick={() => agregarPais()}> Agregar Pais</button>

        {activity.paises.map((el) => (
          <div>
            {" "}
            <p> {el} </p>
            <button key={el.name} value={el} onClick={() => borrarPais(el)}>
              X
            </button>
          </div>
        ))}
      </table>{" "}
      <br />
      {validate.paises && <h5>{validate.paises}</h5>}
      <button type="submit" onClick={handleSubmit} className={style.btn}>
        Crear Actividad
      </button>
      <button onClick={() => cancelar()} className={style.btn}>
        Cancelar
      </button>
      <Link to={'/Home'}>
      <button className={style.btn}>
        Inicio
      </button>
      </Link>
      
    </div>
  );
}

function error(datos) {
  var data = {};
  if (!datos.name) {
    data.name = "Debe ingresar un nombre";
  }
  if (!datos.time) {
    data.time = "Debe ingresar el tiempo de duracion";
  }
  if (datos.paises.length < 1) {
    data.paises = "Debe ingresar por lo menos un pais";
  }
  return data;
}
