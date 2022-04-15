import React from "react";
import { TodoItemProps } from "./Todo";

interface Props {
  data: TodoItemProps;
}

const TodoItem = ({ data }: Props) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', gap:"1rem", border: '1px solid red', backgroundColor: 'yellow', margin: '10px'}}>
      <div>{data.title}</div>
      <div>{`${data.status}`}</div>
      <div>Delete</div>
      <div>Pending</div>
    </div>
  );
};

export default TodoItem;
