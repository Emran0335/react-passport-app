import React, { useState } from "react";
import { add, edit, plus } from "../utils/icons.jsx";
import TaskItem from "./TaskItem.jsx";
import Modal from "./modal/Modal.jsx";
import Content from "./modal/Content.jsx";

const Tasks = () => {
  const [modal, setModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="relative p-[2rem] w-full bg-green-300 border-2 border-cyan-300 rounded-2xl h-full overflow-y-auto scrollbar-webkit">
      {modal && <Modal modal={setModal} content={<Content />} />}
      {isEditing && <Modal modal={setIsEditing} content={<Content />} />}
      <h1 className="font-bold relative after:absolute after:bottom-[-0.5rem] after:left-0 after:w-[3rem] after:h-[0.2rem] after:bg-green-500 after:rounded-[0.5rem]">
        TaskHeader
      </h1>
      <button className="fixed top-[4.9rem] right-[5.1rem] w-12 h-12 rounded-full bg-gray-400 border-[2px] border-cyan-200 text-gray-900 font-bold flex justify-center items-center md:top-[3rem] md:right-[3.5rem]">
        {plus}
      </button>
      <div className={`mt-8 mb-8 ${"gridcss"}`}>
        <TaskItem />
        <button
          className="flex items-center justify-center gap-[0.5rem] h-[16rem] text-gray-900 font-semibold cursor-pointer border-gray-900 bg-gray-400 rounded-md border-dashed border-[3px] transition-all"
          onClick={() => setModal(!modal)}
        >
          {add} Add New Task
        </button>
      </div>
    </div>
  );
};

export default Tasks;
