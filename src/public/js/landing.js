const eliminarTarea = async (idTarea) => {
  console.log(idTarea);
  try {
    await fetch(`http://localhost:4000/tareas/${idTarea}`, {
      method: "DELETE",
    });
    console.log("ok");
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

const editarTarea = async (idTarea) => {
  const nombreTarea = document.getElementById(`tarea${idTarea}`);
  const descripcionTarea = document.getElementById(`descripcion${idTarea}`);
  const objTarea = {
    taskname: nombreTarea.value,
    description: descripcionTarea.value,
  };
  console.log(objTarea)
  try {
    await fetch(`http://localhost:4000/tareas/${idTarea}`, {
      method: "PUT",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(objTarea),
    });
    console.log("ok");
    window.location.reload();
  } catch (error) {
    console.log("error");
  }
};

const nuevaTarea = async () => {
  const nombreTarea = document.getElementById("newTareaId");
  const descripcionTarea = document.getElementById("newDescriptionId");
  const objNewTarea = {
    taskname: nombreTarea.value,
    description: descripcionTarea.value,
  };
  console.log(objNewTarea)
  try {
    await fetch(`http://localhost:4000/tareas`, {
      method: "POST",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(objNewTarea),
    });
    console.log("ok");
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};