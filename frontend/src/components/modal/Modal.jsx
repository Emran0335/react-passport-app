import React from "react";

const Modal = ({ content, modal }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-[100vh] z-50 flex items-center justify-center">
      <div
        className="absolute top-0 left-0 w-full h-[100vh] bg-gray-500 filter"
        onClick={() => modal(!true)}
      >
      </div>
      <div className="my-0 mx-4 relative max-w-[530px] w-full z-[100] rounded-2xl bg-gray-400 shadow-2xl border-gray-900">
        {content}
      </div>
    </div>
  );
};

export default Modal;
