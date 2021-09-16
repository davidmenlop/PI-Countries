import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  detallePais,
  filterContinentes,
  traerPaises,
  filtrarActividad,
  traerActividad,
  orderByName,
  orderByPob,
} from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import style from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const todosPaises = useSelector((state) => state.paises);
  const todasActividades = useSelector((state) => state.actividades);
  const [orden, setOrden] = useState("");
  const [pagActual, setPagActual] = useState(1); // Mi pagina actual sera 1
  const [paisesPorPag, setPaisesPorPag] = useState(10); // Cantidad de paises que quiero por pag.
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberList, setMaxPageNumberList] = useState(5);
  const [minPageNumberList, setMinPageNumberList] = useState(0);
  const [activity, setActivity] = useState(null);
  const indexOfUltimoPais = pagActual * paisesPorPag; // 10
  const indexOfPrimerPais = indexOfUltimoPais - paisesPorPag; // 0
  const paisActual = todosPaises.slice(indexOfPrimerPais, indexOfUltimoPais);

  const paginado = (e) => {
    setPagActual(Number(e.target.id));
  };
  //console.log(pagActual)
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
      setActivity(e.target.value);
      setPagActual(1);
    }
  }

  function handleOrder(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setPagActual(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  function handleOrderPob(e) {
    e.preventDefault();
    dispatch(orderByPob(e.target.value));
    setPagActual(1);
    setOrden(`Ordenado ${e.target.value}`);
  }
  return (
    <div >
      <div className={style.Nav}>
        <nav>
          <div className={style.container}>
            <Link className={style.link} to="/actividades">
              <button className={style.button}>Crear Actividad</button>
            </Link>
            <button
              className={style.button}
              onClick={(e) => {
                handleClick(e);
              }}
            >
              Cargar Paises
            </button>
            <select className={style.select} onChange={(e) => handleOrder(e)}>
              <option value="">Filtrar por A-Z</option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>
            <select
              className={style.select}
              onChange={(e) => handleOrderPob(e)}
            >
              <option value="">PoB</option>
              <option value="may">Mayor</option>
              <option value="men">Menor</option>
            </select>
            <select
              className={style.select}
              onChange={(e) => handleFilterContinent(e)}
            >
              <option value="All">Continentes</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europa</option>
              <option value="Africa">Africa</option>
              <option value="Oceania">Oceania</option>
              <option value="Polar">Polar</option>
            </select>
            <select
              className={style.select}
              name="actividad"
              onChange={(e) => handleActivity(e)}
            >
              <option defaultValue value="All">
                Actividades
              </option>
              {todasActividades?.map((e) => (
                <option key={e.id} value={e.name}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
        </nav>

        <div className={style.paginado}>
          <Paginado
            paisesPorPag={paisesPorPag}
            todosPaises={todosPaises}
            pagActual={pagActual}
            paisActual={paisActual}
            maxPageNumberList={maxPageNumberList}
            minPageNumberList={minPageNumberList}
            pageNumberLimit={pageNumberLimit}
            paginado={paginado}
          ></Paginado>
          <SearchBar />
        </div>

        <div className={style.box}>
          {paisActual?.map((el) => {
            return (
              <div key={el.id}>
                {/* <Link
                to={`/home/${el.id}`}
                onClick={() => dispatch(detallePais(el.id))}
              > */}
                <Card
                  id={el.id}
                  name={el.name}
                  img={el.flag}
                  continent={el.continent}
                  activities={el.activities}
              
                />
                {/* </Link> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
