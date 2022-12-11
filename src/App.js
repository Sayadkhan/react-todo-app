import { useEffect, useState } from "react";
import AddTask from "./Components/AddTask";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import TaskList from "./Components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    //getting data form the server
    featchingData();
  }, []);

  // fetching data
  const featchingData = async () => {
    try {
      const res = await fetch(
        "https://aluminum-delicate-snowshoe.glitch.me/tasks"
      );
      if (!res.ok) throw new Error("Something went worng!");
      const data = await res.json();
      setTasks(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="wrapper bg-gradient-to-t from-gray-900 to-teal-900 min-h-screen text-xl text-gray-100 flex flex-col py-10">
      <Header />
      <AddTask />
      <TaskList tasks={tasks} />
      <Footer />
    </div>
  );
};

export default App;
