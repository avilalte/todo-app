import { HStack, VStack, Text, useColorModeValue } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Task from "../components/Task";
import "../styles/styles.css";
import { menuGradient, menuBorderColor } from "../app/colorModeStyles";

const TaskList = ({ useStyle }) => {
  const noTasksColor = useColorModeValue("yellow.200", "pink.200");
  const tasks = useSelector((state) => state.tasks);
  const setMenuGradient = useColorModeValue(...menuGradient);
  const setBorderColor = useColorModeValue(...menuBorderColor);
  return tasks.length ? (
    <VStack
      boxShadow="xl"
      spacing="1rem"
      borderBottomWidth={6}
      borderColor={setBorderColor}
      borderRadius="xl"
      w="100%"
      p={5}
      pb={7}
      bgGradient={setMenuGradient}
      className="task-list animate__animated animate__pulse"
    >
      {tasks.map((task) => {
        return (
          <Task
            title={task.title}
            key={task.id}
            id={task.id}
            description={task.description}
            completed={task.completed}
            menuGradient={menuGradient}
          />
        );
      })}
    </VStack>
  ) : (
    <HStack justifyContent="center" mb={100}>
      <Text
        p={5}
        borderBottomWidth={2}
        borderRadius={10}
        borderColor={noTasksColor}
        color={noTasksColor}
      >
        There are no tasks. Add one!
      </Text>
    </HStack>
  );
};

export default TaskList;
