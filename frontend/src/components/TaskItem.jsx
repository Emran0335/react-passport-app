import React from "react";
import { edit, trash } from "../utils/icons";
import { useGlobalState } from "../context/globalProvider";

const TaskItem = ({ title, description, date, isCompleted, id }) => {
  const { theme } = useGlobalState();
  return (
    <div
      className="py-5 px-4 rounded-2xl shadow-md  border-[2px] h-[16rem] flex flex-col gap-2"
      style={{
        backgroundColor: `${theme.colorBg4}`,
        boxShadow: `${theme.shadow7}`,
        borderColor: `${theme.borderColor2}`,
      }}
    >
      <h1 className="text-[1.5rem] font-semibold">{title}</h1>
      <p>{description}</p>
      <p className="mt-auto">{date}</p>
      <div className="flex items-center gap-5">
        {isCompleted ? (
          <button
            className="inline-block py-2 px-4 bg-gray-400 rounded-3xl"
            style={{
              background: `${theme.colorGreenDark}`,
            }}
          >
            Completed
          </button>
        ) : (
          <button
            className="inline-block py-2 px-4 bg-gray-400 rounded-3xl"
            style={{
              background: `${theme.colorDanger}`,
            }}
          >
            Incomplete
          </button>
        )}
        <button className="ml-auto">{edit}</button>
        <button className="delete">{trash}</button>
      </div>
    </div>
  );
};

export default TaskItem;
