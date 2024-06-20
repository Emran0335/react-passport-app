import React from "react";
import Tasks from "./Tasks";
import { useGlobalState } from "../context/globalProvider";

const TasksContainer = () => {
  const { theme } = useGlobalState();
  return <Tasks />;
};

export default TasksContainer;
