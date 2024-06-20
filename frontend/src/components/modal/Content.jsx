import React, { useEffect, useRef, useState } from "react";
import Button from "../Button";
import { add } from "../../utils/icons";

const Content = ({ modal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [completed, setCompleted] = useState("");
  const [important, setImportant] = useState("");

  const inputRef = useRef();
  const descriptionRef = useRef();

  const handleChange = (name) => (e) => {
    switch (name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "date":
        setDate(e.target.value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "important":
        setImportant(e.target.checked);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = {
      title,
      description,
      date,
      isCompleted: completed,
      isImportant: important,
    };
    // port: 6000 is considered bad by chrome browser
    try {
      const apiUrl = "http://localhost:3000/api/task/create";
      const requestedData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      };
      const response = await fetch(apiUrl, requestedData);
      if (response.ok) {
        setTitle("");
        setDescription("");
        setDate("");
        setCompleted("");
        setImportant("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
    descriptionRef.current?.focus();
  }, [inputRef, descriptionRef]);

  return (
    <form onSubmit={handleSubmit} className="text-gray-950 m-4">
      <h1 className="text-gray-900 text-2xl font-extrabold flex justify-center">
        Create a Task
      </h1>
      <div className="relative my-7 mx-0">
        <label htmlFor="title" className="mb-2 inline-block">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          ref={inputRef}
          placeholder="title"
          className="w-full p-4 rounded-md"
          onChange={handleChange("title")}
        />
      </div>
      <div className="relative my-7 mx-0">
        <label htmlFor="description" className="mb-2 inline-block">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          ref={descriptionRef}
          name="description"
          placeholder="description"
          className="w-full p-4 pb-8 rounded-md"
          onChange={handleChange("description")}
        ></textarea>
      </div>
      <div className="relative my-7 mx-0">
        <label htmlFor="date" className="mb-2 inline-block">
          Date
        </label>
        <input
          type="date"
          id="date"
          value={date}
          placeholder="date"
          name="date"
          className="mx-4"
          onChange={handleChange("date")}
        />
      </div>
      <div className="irelative my-7 mx-0 toggler">
        <label htmlFor="completed" className=" inline-block">
          Toggle Completed
        </label>
        <input
          type="checkbox"
          id="completed"
          name="completed"
          value={completed.toString()}
          placeholder="completed"
          className="mx-4"
          onChange={handleChange("completed")}
        />
      </div>
      <div className="relative my-7 mx-0 toggler">
        <label htmlFor="important">Toggle Important</label>
        <input
          type="checkbox"
          id="important"
          name="important"
          value={important.toString()}
          placeholder="important"
          className="mx-4"
          onChange={handleChange("important")}
        />
      </div>
      <div className="flex justify-center transition-all">
        <Button
          type="submit"
          name="Create Task"
          icon={add}
          padding={"0.8rem 2rem"}
          borderRad={"0.8rem"}
          fs={"1.2rem"}
          fw={"500"}
          background={"rgb(0, 163, 255)"}
        />
      </div>
    </form>
  );
};

export default Content;
