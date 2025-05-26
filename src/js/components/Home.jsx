import React, { useState } from "react";
import EntradaTarea from "./EntradaTarea";
import ListaTareas from "./ListaTarea";


const Home = () => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.trim() !== "") {
      setTareas([...tareas, tarea]);
    }
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  return (
    <div className="container mt-5 bg-light p-4 rounded">
      <h1 className="text-center fs-1 display-4 fw-bolder text-dark">Lista de Tareas</h1>
      <div className="card shadow-m p-3 mb-5 bg-light rounded mx-auto " style={{ maxWidth: "500px" }}>
        <EntradaTarea onAgregar={agregarTarea} />
        <ListaTareas tareas={tareas} onEliminar={eliminarTarea} className="list-group" />
        <div className="card-footer text-white bg-primary ">
          {tareas.length === 0
            ? "No hay tareas, añadir tareas"
            : `${tareas.length} tarea${tareas.length !== 1 ? "s" : ""} restante${tareas.length !== 1 ? "s" : ""}`}
        </div>
      </div>
    </div>
  );
};

export default Home;
