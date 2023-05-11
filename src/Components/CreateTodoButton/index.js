export const CreateTodoButton = () => {
  const handleOnClink = (event) => {
    console.log("Reaccionando", event);
  };

  return (
    <button onClick={(event) => handleOnClink(event)}>Agregar tarea</button>
  );
};
