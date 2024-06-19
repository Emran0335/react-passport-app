import React from "react";
import { arrowLeft } from "../utils/icons.jsx";
import { menu } from "../utils/menu.jsx";
import Button from "./Button.jsx";
import img from "../assets/react.svg";

const Sidebar = () => {
  return (
    <nav className="relative w-[250px] bg-green-300 border-2 border-cyan-300 rounded-2xl flex flex-col justify-between text-gray-900 transition-all">
      <button className="hidden py-[0.8rem] px-[0.9rem] absolute right-[-67px] top-[1.8rem] rounded-tr-2xl rounded-br-2xl border-t-gray-900 border-r-gray-900 border-b-gray-900 bg-gray-950">
        {arrowLeft}
      </button>
      <div className="m-[1.5rem] py-4 px-3 relative rounded-2xl cursor-pointer font-medium text-gray-900 flex items-center">
        <div className="absolute top-0 left-0 w-full h-full backdrop-filter z-0 bg-gray-400 transition-all rounded-2xl border-cyan-500 opacity-20"></div>
        <div className="flex-shrink-0 inline-block overflow-hidden transition-all rounded-full w-[40%] h-[70%]">
          <img
            src={img}
            alt="profile image"
            className="rounded-full transition-all"
          />
        </div>
        <div className="w-full h-full absolute z-20 top-0"></div>
        <h1 className="capitalize text-[1.2rem] flex flex-col leading-6 relative z-[1]">
          Emran Hossain
        </h1>
      </div>
      <ul className="relative pt-3 pr-4 flex flex-col gap-8 pb-3 pl-9 cursor-pointer after:top-0 after:left-0 after:bg-gray-400 after:w-0 after:h-full after:z-10 transition-all before:right-0 before:top-0 before:h-full before:bg-gray-400 rounded-bl-[5px] rounded-tl-[5px]">
        {menu.map((item) => {
          const link = item.link;
          return (
            <li className="flex items-center gap-3 text-gray-900" key={item.id}>
              {item.icon}
              <a href={link} className="font-medium">
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="sign-out relative m-[1.5rem]">
        <Button />
      </div>
    </nav>
  );
};

export default Sidebar;
