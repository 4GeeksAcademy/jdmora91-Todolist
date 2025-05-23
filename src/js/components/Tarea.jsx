import React, { useState } from "react";

const Tarea = ({ texto, onEliminar }) => {
  const [hover, setHover] = useState(false);

  

  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {texto}
      {hover && (
        <button className="btn btn-sm text-danger" onClick={onEliminar}>
          ❌
        </button>
      )}
    </li>
  );
};

export default Tarea;
