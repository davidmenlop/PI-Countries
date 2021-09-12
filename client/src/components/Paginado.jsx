/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import style from "./Paginado.module.css";
import { useState } from "react";

export default function Paginado({
  paisesPorPag,
  todosPaises,
  paginado,
  pageNumberlimit,
}) {
  const pageNumbers = [];
  const [pagActual, setPagActual] = useState(1);
  const indexOfUltimoPais = pagActual * paisesPorPag; // 10
  const indexOfPrimerPais = indexOfUltimoPais - paisesPorPag; // 0
  const paisActual = todosPaises.slice(indexOfPrimerPais, indexOfUltimoPais);
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberList, setMaxPageNumberList] = useState(5);
  const [minPageNumberList, setMinPageNumberList] = useState(0);

  for (let i = 1; i <= Math.ceil(todosPaises.length / paisesPorPag); i++) {
    pageNumbers.push(i);
  }




  const handleNextbtn = ()=>{
    setPagActual(pagActual+5);

    if(pagActual+5>maxPageNumberList){
      setMaxPageNumberList(maxPageNumberList + pageNumberLimit);
      setMinPageNumberList(minPageNumberList + pageNumberLimit);
    }
  }



  const handlePrevbtn = ()=>{
    setPagActual(pagActual-5);

    if((pagActual-1)%pageNumberLimit==0){
      setMaxPageNumberList(maxPageNumberList - pageNumberLimit);
      setMinPageNumberList(minPageNumberList - pageNumberLimit);
    }
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    console.log(pagActual)
    if (number < maxPageNumberList + 1 && number > minPageNumberList) {
      return (
        <li
          key={number}
          id={number}
          onClick={paginado}
          //className={pagActual == number ? style.active : null}
        >
          {number}
        </li>
      );
    } else return null;
  });

  return (
    <div>
      <ul className={style.pageNumbers}>
        <li>
          <button onClick={handlePrevbtn}>PREV</button>
        </li>
        {renderPageNumbers}
        <li>
          <button onClick={handleNextbtn}>NEXT</button>
        </li>
      </ul>
    </div>
  );

  /* return (
    <nav>
      <ul className="pageNumbers">
        {pageNumbers?.map((number) => (
          <li key={number}>
            <a onClick={() => paginado(number)}>{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  ); */
}
