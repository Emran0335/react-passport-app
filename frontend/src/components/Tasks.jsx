import React, { useState } from "react";
import { add, edit, plus } from "../utils/icons.jsx";
import TaskItem from "./TaskItem.jsx";
import Modal from "./modal/Modal.jsx";
import Content from "./modal/Content.jsx";
import { useGlobalState } from "../context/globalProvider.jsx";

const Tasks = ({ taskHeader, tasks }) => {
  const { theme, openModal, modal, isEditing } = useGlobalState();
  console.log(theme);
  return (
    <main
      className="relative p-[2rem] w-full border-2 rounded-2xl h-full overflow-y-auto scrollbar-webkit"
      style={{
        backgroundColor: `${theme.colorBg2}`,
        borderColor: `${theme.borderColor2}`,
      }}
    >
      {modal && <Modal modal={setModal} content={<Content />} />}
      {isEditing && <Modal content={<Content />} />}
      <h1 className="font-bold relative after:absolute after:bottom-[-0.5rem] after:left-0 after:w-[3rem] after:h-[0.2rem] after:bg-green-500 after:rounded-[0.5rem]">
        {taskHeader}
      </h1>
      <button
        className="fixed top-[4.9rem] right-[5.1rem] w-12 h-12 rounded-full  border-[2px] font-bold flex justify-center items-center md:top-[3rem] md:right-[3.5rem]"
        style={{
          backgroundColor: `${theme.colorBg}`,
          borderColor: `${theme.borderColor2}`,
          color: `${theme.colorGrey2}`,
        }}
      >
        {plus}
      </button>
      <div className={`mt-8 mb-8 ${"gridcss"}`}>
        {tasks.map((task) => (
          <TaskItem
            key={task._id}
            title={task.title}
            description={task.description}
            date={task.date}
            isCompleted={task.isCompleted}
            id={task.id}
          />
        ))}
        <button
          className="flex items-center justify-center gap-[0.5rem] h-[16rem] font-semibold cursor-pointer border-gray-900  rounded-md border-dashed border-[3px] transition-all"
          onClick={openModal}
          style={{
            color: `${theme.colorGrey2}`,
            borderColor: `${theme.colorGrey5}`,
          }}
        >
          {isEditing ? edit : add}
          {isEditing ? "Edit The Task" : "Add New Task"}
        </button>
      </div>
    </main>
  );
};

export default Tasks;
