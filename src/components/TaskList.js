import { HStack, VStack, Text } from "@chakra-ui/react";
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
  return tasks.length ? (
    <VStack
      boxShadow="xl"
      spacing="1rem"
      borderBottomWidth={6}
      borderColor={menuBorderColor}
      minW="15%"
      w="30%"
      borderRadius="xl"
      px={5}
      pt={5}
      pb={7}
      bgGradient={menuGradient}
      className="animate__animated animate__pulse"
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
    <HStack mb={100}>
      <Text
        p={5}
        borderBottomWidth={2}
        borderRadius={10}
        borderColor="yellow.400"
        color="yellow.200"
      >
        There are no tasks
      </Text>
    </HStack>
  );
};

export default TaskList;
