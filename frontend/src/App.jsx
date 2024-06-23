import Sidebar from "./components/Sidebar";
import ContextProvider from "./providers/ContextProvider";
import TasksContainer from "./components/TasksContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./redux/userSlice";

function App() {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  const _id = "6676b9cd6930c0beff6acb62";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser(_id));
  }, []);
  return (
    <ContextProvider>
      <div className="w-full p-[2.5rem] flex gap-[2.5rem] h-[100vh] transition-all md:p-[1rem] md:gap-[1rem]">
        {user ? (
          <>
            <Sidebar />
            <TasksContainer />
          </>
        ) : (
          <Sidebar />
        )}
      </div>
    </ContextProvider>
  );
}

export default App;
