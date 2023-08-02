import { useEffect, useState } from "react";
import { TaskCard } from "./TaskCard";

const index = () => {
  const [TaskValue, setTaskValue] = useState([]);
  useEffect(() => {
    const niggy = localStorage.getItem("nigga");
    const pipi = JSON.parse(niggy) || [];
    setTaskValue(pipi);
  }, []);

  const del = ({ t }) => {
    const newArray = TaskValue.filter((val) => val.title !== t);
    setTaskValue(newArray);
    localStorage.setItem("nigga", JSON.stringify(newArray));
  };
  const [title, settitle] = useState(" ");
  const [des, setdes] = useState(" ");
  const [add, setadd] = useState(false);
  const push = () => {
    const data = {
      title,
      des,
    };

    setTaskValue((prevValue) => [...prevValue, data]); // Update state with the new data

    const niggy = JSON.parse(localStorage.getItem("nigga")) || [];
    niggy.push(data); // Add the new data to the existing data
    localStorage.setItem("nigga", JSON.stringify(niggy)); // Save the updated data to local storage

    setadd(false);
    settitle("");
    setdes("");
  };

  return (
    <div
      className={
        TaskValue.length == 0
          ? "bg-black flex flex-col h-screen relative"
          : " bg-emerald-500 flex flex-col h-screen relative"
      }
    >
      {add && (
        <div className="bg-slate-500 absolute flex w-screen h-screen items-center justify-center">
          <div className="bg-slate-300 z-50 flex flex-col max-h-max max-w-md rounded-2xl p-5 pt-10 pb-10 shadow-black">
            <input
              type="text"
              value={title}
              onChange={(e) => settitle(e.target.value)}
              placeholder="tit"
              className="bg-slate-800 rounded-md dark:text-white m-5 mb-2 text-base font-medium tracking-tight border-2 border-purple-600"
            />
            <input
              type="text"
              value={des}
              onChange={(c) => setdes(c.target.value)}
              placeholder="desc"
              className="inline-block bg-slate-800 rounded-md dark:text-white m-5 mt-2 text-base font-medium tracking-tight border-2 border-emerald-600"
            />
            <div className="flex justify-center">
              {" "}
              <button
                onClick={push}
                className="inline-block border-2 relative bottom-0 bg-slate-800 m-5 dark:text-yellow-300 mt-auto rounded-md border-blue-600 text-green-800"
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => {
          console.log("key is pressed");
          setadd(!add);
        }}
        className="fixed bottom-20 right-20 rounded bg-blue-400  p-3"
      >
        Add
      </button>
      {TaskValue.map((val, index) => (
        <TaskCard
          t={val.title}
          key={index}
          d={val.des}
          deleteTaskHandler={del}
        />
      ))}
    </div>
  );
};

export default index;
