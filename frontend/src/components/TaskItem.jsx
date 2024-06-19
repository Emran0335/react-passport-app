import React from "react";
import { edit, trash } from "../utils/icons";

const TaskItem = () => {
  return (
    <div className="py-5 px-4 rounded-2xl shadow-md bg-gray-400 border-[2px] border-gray-500 h-[16rem] flex flex-col gap-2">
      <h1 className="text-[1.5rem] font-semibold">Title</h1>
      <p>Description</p>
      <p className="mt-auto">date</p>
      <div className="flex items-center gap-5">
        <button className="inline-block py-2 px-4 bg-gray-400 rounded-3xl">
          Completed
        </button>
        <button className="inline-block py-2 px-4 bg-gray-400 rounded-3xl">
          Incomplete
        </button>
        <button className="ml-auto">{edit}</button>
        <button className="delete">{trash}</button>
      </div>
    </div>
  );
};

export default TaskItem;
