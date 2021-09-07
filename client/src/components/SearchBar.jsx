import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { buscarPaises } from "../actions";

export default function SearchBar({ onSearch }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(buscarPaises(name));
    setName("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar Pais"
        onChange={(e) => handleInputChange(e)}
      />
      <button type='submit' onClick={e=>handleSubmit(e)}>BUSCAR</button>
    </div>
  );
}
