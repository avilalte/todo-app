import { HStack, VStack, Text, useColorModeValue } from "@chakra-ui/react";
import Task from "../components/Task";
import "../styles/styles.css";

const TaskList = ({
  setTasks,
  handleDelete,
  tasks,
  menuGradient,
  menuBorderColor,
  handleTaskCompleted,
}) => {

const noTasksColor = useColorModeValue("yellow.200", 'pink.200');

  return tasks.length ? (
    <VStack
      boxShadow="xl"
      spacing="1rem"
      borderBottomWidth={6}
      borderColor={menuBorderColor}
      borderRadius="xl"
      w='100%'
      p={5}
      pb={7}
      bgGradient={menuGradient}
      className="task-list animate__animated animate__pulse"
    >
      {tasks.map((task) => {
        return (
          <Task
            task={task.task}
            key={task.id}
            id={task.id}
            completed={task.completed}
            handleDelete={handleDelete}
            setTasks={setTasks}
            handleTaskCompleted={handleTaskCompleted}
          />
        );
      })}
    </VStack>
  ) : (
    <HStack justifyContent='center' mb={100}>
      <Text
        p={5}
        borderBottomWidth={2}
        borderRadius={10}
        borderColor="yellow.400"
        color={noTasksColor}
      >
        There are no tasks
      </Text>
    </HStack>
  );
};

export default TaskList;
