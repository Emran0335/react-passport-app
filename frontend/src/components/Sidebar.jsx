import React from "react";
import { arrowLeft, bars, logout } from "../utils/icons.jsx";
import { menu } from "../utils/menu.jsx";
import Button from "./Button.jsx";
import img from "../assets/react.svg";
import { useGlobalState } from "../context/globalProvider.jsx";

const Sidebar = () => {
  const { theme, collapse, collapseMenu } = useGlobalState();
  return (
    <nav
      className="relative rounded-2xl flex flex-col justify-between transition-all"
      style={{
        width: `${theme.sidebarWidth}`,
        backgroundColor: `${theme.colorBg2}`,
        borderColor: `${theme.borderColor2}`,
        color: `${theme.colorGrey2}`,
      }}
    >
      <button
        className="hidden py-[0.8rem] px-[0.9rem] absolute right-[-67px] top-[1.8rem] rounded-tr-2xl rounded-br-2xl"
        style={{
          borderTop: `${theme.borderColor2}`,
          borderRight: `${theme.borderColor2}`,
          borderBottom: `${theme.borderColor2}`,
        }}
      >
        {collapse ? bars : arrowLeft}
      </button>
      <div
        className="m-[1.5rem] py-4 px-3 relative rounded-2xl cursor-pointer font-medium flex items-center"
        style={{
          color: `${theme.colorGrey0}`,
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full backdrop-filter z-0 transition-all rounded-2xl opacity-20 hover:opacity-100 hover:border-gray-900 backdrop-blur-md"
          style={{
            background: `${theme.colorBg3}`,
            borderColor: `${theme.borderColor2}`,
          }}
        ></div>
        <div className="flex-shrink-0 inline-block overflow-hidden transition-all rounded-full w-[40%] h-[70%] hover:scale-[0.9]">
          <img src={img} alt="profile image" className="rounded-full" />
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
            <li className="flex items-center gap-3 text-gray-200" key={item.id}>
              {item.icon}
              <a href={link} className="font-medium">
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="sign-out relative m-[1.5rem]">
        <Button
          name={"Sign Out"}
          type={"submit"}
          padding={"0.4rem 0.8rem"}
          borderRad={"0.8rem"}
          fw={"500"}
          fs={"1.2rem"}
          icon={logout}
        />
      </div>
    </nav>
  );
};

export default Sidebar;
