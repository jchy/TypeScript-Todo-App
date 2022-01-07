import React from "react";

interface Props {
  text: string;
  onClick: () => void;
}

const Button = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      style={{ border: "1px solid black", padding: "2rem" }}
    >
      {props.text}
    </button>
  );
};

export default Button;
