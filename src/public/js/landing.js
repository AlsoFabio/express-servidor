// const eliminarTarea = async (idTarea) => {
//     console.log(idTarea)
//     try {
//         await fetch(`http://localhost:4000/tasks/${idTarea}`, {method: 'DELETE'})
//         console.log("ok")
//     } catch (error) {
//         console.log(error.message)
//     }
// }

const eliminarTarea = async (event) => {
    event.preventDefault();

    console.log(event.target.value);
}