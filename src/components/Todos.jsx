import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

export const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      {todos && todos.length > 0 ? (
        <ul className="list">
          {todos.map((todo) => (
            <li key={todo.id}>
              <p>{todo.text}</p>
              <i
                className="fa-solid fa-trash"
                onClick={() => {
                  let decision = confirm(
                    "Are you sure you want to delete this item?"
                  );
                  if (decision) {
                    dispatch(removeTodo(todo.id));
                  } else {
                    return;
                  }
                }}
              ></i>
            </li>
          ))}
        </ul>
      ) : (
        <p>The list is currently empty.</p>
      )}
    </>
  );
};
