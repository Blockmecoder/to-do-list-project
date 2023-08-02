import React from "react";

export const TaskCard = ({ t, d, deleteTaskHandler }) => {
  const deleteTask = () => {
    deleteTaskHandler({ t });
  };
  return (
    <div className="flex justify-center w-full h-auto bg-emerald-500 shadow-fuchsia-700 ">
      <div className="w-5/12 mt-5 mb-5 bg-blue-300 rounded-xl">
        <div className="flex relative justify-center bg-blue-300 rounded-xl shadow-xl transform hover:scale-110 transition-transform">
          <h1 className="bg-gradient-to-bl overflow-visible from-purple-500 rounded-full hover:rotate-12 animate-bounce text-lg m-10 p-5">
            {t}
          </h1>
          <h1 className="bg-gradient-to-bl overflow-visible from-purple-500 rounded-full hover:rotate-12 animate-bounce  text-lg m-10 p-5">
            {d}
          </h1>
          <button
            onClick={deleteTask}
            className="bg-red-600 rounded-full hover:rotate-12 animate-bounce p-5 m-10"
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};
