import React from "react";
import { Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import AddTask from "../pages/AddTask";
import Tasks from "../pages/Tasks";

const routes = [
  {
    path: "/",
    component: <div>Home</div>,
    exact: true,
  },
  {
    path: "/tasks/add",
    component: <AddTask/>,
    exact: true,
  },
  {
    path: "/tasks",
    component: <Tasks/>,
    exact: true,
  },
];

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      {routes.map(({ component, ...item }) => (
        <Route key={item.path} {...item}>
          <Layout>
            {component}
          </Layout>
        </Route>
      ))}
    </div>
  );
};

export default AllRoutes;
