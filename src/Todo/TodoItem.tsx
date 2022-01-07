import React from "react";
import { TodoItemProps } from "./Todo";

interface Props {
  data: TodoItemProps;
}

const TodoItem = ({ data }: Props) => {
  return (
    <div>
      <div>{data.title}</div>
      <div>{`${data.status}`}</div>
    </div>
  );
};

export default TodoItem;
