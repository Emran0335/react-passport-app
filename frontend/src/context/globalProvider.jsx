import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import themes from "./themes";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/tasksSlice";
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [collapse, setCollapse] = useState(false);

  // for editing
  const [isEditing, setIsEditing] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState({
    title: "",
    description: "",
    id: "",
  });
  const { tasks } = useSelector((state) => state.tasks);
  console.log(tasks);
  const dispatch = useDispatch();
  const theme = themes[0];

  const handleEdit = useCallback(({ title, description, id }) => {
    setIsEditing(true);
    setTaskToEdit({ title, description, id });
  });

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const collapseMenu = () => {
    setCollapse(!collapse);
  };

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const completedTasks = tasks.filter((task) => task.isCompleted);
  const importantTasks = tasks.filter((task) => task.isImportant);
  const incompleteTasks = tasks.filter((task) => !task.isCompleted);

  return (
    <GlobalContext.Provider
      value={{
        theme,
        tasks,
        isLoading,
        modal,
        openModal,
        setModal,
        closeModal,
        collapse,
        collapseMenu,
        isEditing,
        setIsEditing,
        taskToEdit,
        handleEdit,
        completedTasks,
        importantTasks,
        incompleteTasks,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
