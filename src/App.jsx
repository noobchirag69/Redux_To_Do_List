import { AddTodo } from "./components/AddTodo";
import { Todos } from "./components/Todos";

const App = () => {
  return (
    <>
      <div className="container">
        <h1>To-Do List</h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
};

export default App;
