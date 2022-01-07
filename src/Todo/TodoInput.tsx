import React, { useState } from "react";

interface Props {
  onSubmit: (text: string) => void;
}

const TodoInput = (props: Props) => {
  const [text, setText] = useState<string | undefined>(undefined);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const handleAdd = () => {
    if (text) {
      props.onSubmit(text);
      setText("");
    }
  };

  return (
    <div>
      <input
        value={text}
        onChange={onChange}
        type="text"
        placeholder="add something"
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};

export default TodoInput;
