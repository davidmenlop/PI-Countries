
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { traerPaises } from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function Home() {
    
  const dispatch = useDispatch();
  const todosPaises = useSelector((state) => state.paises);

  useEffect(() => {
    dispatch(traerPaises());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(traerPaises());
  }

  return (
    <div>
      <Link to="/actividades">Crear Actividad</Link>
      <h1>Paises</h1>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Cargar Paises
      </button>
      <div>
        <select>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
        <select>
          <option value="all">Todos</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europa</option>
          <option value="Africa">Africa</option>
          <option value="Oceania">Oceania</option>
          <option value="Polar">Polar</option>
        </select>
        <select>
          <option value="actividad">Actividad</option>
        </select>

        {todosPaises?.map((el) => {
          return (
            <div>
              <Link to={"/home"}>
                <Card name={el.name} img={el.flag} continent={el.continent} key={el.id}/>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
