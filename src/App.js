import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { VStack } from "@chakra-ui/react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Homework", completed: false },
    { id: 2, task: "Study", completed: true },
  ]);

  const handleAdd = (taskInput) => {
    if (taskInput.trim()) {
      const newTask = {
        task: taskInput.trim(),
        id: uuidv4(),
        completed: false,
      };
      setTasks([newTask, ...tasks]);
    }
  };
  const handleDelete = (id) => {
    const newList = tasks.filter((task) => task.id !== id);
    setTasks(newList);
  };
  const handleTaskCompleted = (id) => {
    const newList = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(newList);
  };

  return (
    <VStack
      pt="15rem"
      w="100vw"
      h="100vh"
      bgGradient={[
        "linear(to-tr, teal.300, yellow.400)",
        "linear(to-t, blue.200, teal.500)",
        "linear(to-b, orange.100, purple.300)",
      ]}
    >
      <TaskForm handleAdd={handleAdd} />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        handleDelete={handleDelete}
        handleTaskCompleted={handleTaskCompleted}
      />
    </VStack>
  );
}

export default App;
