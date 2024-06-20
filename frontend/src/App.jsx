
import Sidebar from "./components/Sidebar";
import ContextProvider from "./providers/ContextProvider";
import TasksContainer from "./components/TasksContainer";

function App() {
  return (
    <ContextProvider>
      <div className="w-full p-[2.5rem] flex gap-[2.5rem] h-[100vh] transition-all md:p-[1rem] md:gap-[1rem]">
        <Sidebar />
        <TasksContainer />
      </div>
    </ContextProvider>
  );
}

export default App;
