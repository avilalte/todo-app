import { HStack, VStack, Text } from "@chakra-ui/react";
import Task from "../components/Task";
import "../styles/styles.css";

const TaskList = ({ setTasks, handleDelete, tasks, handleTaskCompleted }) => {
  return tasks.length ? (
    <VStack boxShadow="xl" w="25%" bg="white" borderRadius="lg" p={4}>
      {tasks.map((task, ind) => {
        task.id = ind + 1;
        return (
          <Task
            task={task.task}
            key={ind + 1}
            id={ind + 1}
            handleDelete={handleDelete}
            completed={task.completed}
            setTasks={setTasks}
            handleTaskCompleted={handleTaskCompleted}
          />
        );
      })}
    </VStack>
  ) : (
    <HStack>
      <Text>There are no tasks</Text>
    </HStack>
  );
};

export default TaskList;
