import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";
import Tasks from "./components/Tasks";
import { useEffect } from "react";
import { fetchTasks } from "./redux/tasksSlice";

function App() {
  const allTasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  console.log(allTasks)
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <div className="w-full p-[2.5rem] flex gap-[2.5rem] h-[100vh] transition-all md:p-[1rem] md:gap-[1rem]">
      <Sidebar />
      <Tasks />
    </div>
  );
}

export default App;
