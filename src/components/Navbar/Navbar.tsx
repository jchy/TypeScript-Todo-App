import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
interface Props {}

const Navbar = (props: Props) => {
  return (
    <Flex align="center" justify="center" gap="1rem">
      <Link to="/">Home</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/tasks/add">Add a new Task</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/summary">Summary</Link>
    </Flex>
  );
};

export default Navbar;
