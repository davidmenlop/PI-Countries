import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  detallePais,
  filterContinentes,
  traerPaises,
  filtrarActividad,
  traerActividad,
} from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";

export default function Home() {
  const dispatch = useDispatch();
  const todosPaises = useSelector((state) => state.paises);
  const todasActividades = useSelector((state) => state.actividades);
  const [pagActual, setPagActual] = useState(1); // Mi pagina actual sera 1
  const [paisesPorPag, setPaisesPorPag] = useState(10); // Cantidad de paises que quiero por pag.
  const [activity, setActivity] = useState(null);
  const indexOfUltimoPais = pagActual * paisesPorPag; // 10
  const indexOfPrimerPais = indexOfUltimoPais - paisesPorPag; // 0
  const paisActual = todosPaises.slice(indexOfPrimerPais, indexOfUltimoPais);

  const paginado = (pagNumber) => {
    setPagActual(pagNumber);
  };

  useEffect(() => {
    dispatch(traerPaises());
    dispatch(traerActividad());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(traerPaises());
  }

  function handleFilterContinent(e) {
    dispatch(filterContinentes(e.target.value));
  }

  function handleActivity(e) {
    if (e.target.value === "All") {
      dispatch(traerPaises());
      setPagActual(1);
    } else {
      dispatch(filtrarActividad(e.target.value));
      setActivity(e.target.value)
      setPagActual(1);
    }
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
        <select onChange={(e) => handleFilterContinent(e)}>
          <option value="All">Todos</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europa</option>
          <option value="Africa">Africa</option>
          <option value="Oceania">Oceania</option>
          <option value="Polar">Polar</option>
        </select>
        <select name="actividad" onChange={(e) => handleActivity(e)}>
          <option defaulValue value="All">
            Todas
          </option>
          {todasActividades?.map((e) => (
            <option value={e.name}>{e.name}</option>
          ))}
        </select>
        <SearchBar />
        <Paginado
          paisesPorPag={paisesPorPag}
          todosPaises={todosPaises.length}
          paginado={paginado}
        ></Paginado>

        {paisActual?.map((el) => {
          return (
            <div key={el.id}>
              <Link
                to={`/home/${el.id}`}
                onClick={() => dispatch(detallePais(el.id))}
              >
                <Card
                  id={el.id}
                  name={el.name}
                  img={el.flag}
                  continent={el.continent}
                  activities={el.activities}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
