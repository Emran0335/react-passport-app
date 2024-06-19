import Sidebar from "./components/Sidebar";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="w-full p-[2.5rem] flex gap-[2.5rem] h-[100vh] transition-all md:p-[1rem] md:gap-[1rem]">
      <Sidebar />
      <Tasks />
    </div>
  );
}

export default App;
