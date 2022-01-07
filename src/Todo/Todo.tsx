import React from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export interface TodoItemProps {
  id: string | number;
  title: string;
  status: boolean;
}

const Todo = () => {
  const [todos, setTodos] = React.useState<TodoItemProps[]>([]);

  const handleAdd = (text: string) => {
    const payload = {
      id: todos.length + 1,
      title: text,
      status: false,
    };

    setTodos([...todos, payload]);
  };

  return (
    <div>
      <h1>Todo</h1>
      <div>
        <TodoInput onSubmit={handleAdd} />
      </div>
      <div>
        {todos.map((item) => (
          <TodoItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Todo;
