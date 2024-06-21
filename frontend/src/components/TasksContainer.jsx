import React from "react";
import Tasks from "./Tasks";
import { useGlobalState } from "../context/globalProvider";

const TasksContainer = () => {
  const { tasks } = useGlobalState();
  return <Tasks taskHeader="All Tasks" tasks={tasks} />;
};

export default TasksContainer;
