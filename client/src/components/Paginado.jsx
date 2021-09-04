/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Paginado.style.css'


export default function Paginado({ paisesPorPag, todosPaises, paginado }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(todosPaises / paisesPorPag); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pageNumbers'>
        {pageNumbers?.map((number) => (
          <li key={number}>
            <a onClick={() => paginado(number)}>{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
