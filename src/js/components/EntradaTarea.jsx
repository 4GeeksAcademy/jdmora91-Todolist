import React, { useState } from "react";

const EntradaTarea = ({ onAgregar }) => {
  const [valor, setValor] = useState("");

  const manejarKeyDown = (e) => {
    if (e.key === "Enter") {
      onAgregar(valor);
      setValor("");
    }
  };

  return (
    <input
      type="text"
      className="form-control border-0"
      placeholder="¿Qué necesitas hacer?"
      value={valor}
      onChange={(e) => setValor(e.target.value)}
      onKeyDown={manejarKeyDown}
    />
  );
};

export default EntradaTarea;
