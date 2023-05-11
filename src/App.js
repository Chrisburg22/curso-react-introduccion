import './App.css';
import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList/iindex';
import { TodoItem } from './Components/TodoItem';
import { CreateTodoButton } from './Components/CreateTodoButton';

function App() {
  return (
    //JSX 
    <div className="App">
      {/* 1. Definir la estructura de TODO Machine */}
      {/* 2. Crear los componentes y importarlos */}
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>
      <CreateTodoButton/>
    </div>
  );
}

export default App;
