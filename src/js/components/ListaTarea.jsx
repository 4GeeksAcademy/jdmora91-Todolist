import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({ tareas, onEliminar }) => {
  return (
    <ul className="list-group list-group-flush">
      {tareas.map((tarea, index) => (
        <Tarea
          key={index}
          texto={tarea}
          onEliminar={() => onEliminar(index)}
        />
      ))}
    </ul>
  );
};

export default ListaTareas;
