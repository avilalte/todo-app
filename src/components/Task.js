import {
  Tooltip,
  HStack,
  Button,
  Spacer,
  Text,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import "animate.css";

const Task = ({ task, id, completed, handleDelete, handleTaskCompleted }) => {
  const taskGradientCompleted = useColorModeValue(
    "linear(to-t, #eccbff91, #c4b2d25d )",
    "linear(to-t, #7575759b, #aeaeae5d )"
  );
  const taskGradient = useColorModeValue(
    "linear(to-t, #faf4dbfb, #fffdf99b )",
    "linear(to-t, #bbbbe2 0, #b2a6d4 50%, #9b92c6 100% )"
  );
  const taskText = useColorModeValue("default", "gray.800");
  const taskTextCompleted = useColorModeValue("default", "gray.900");

  return (
    <HStack
      shadow="md"
      bgGradient={completed ? taskGradientCompleted : taskGradient}
      className="task animate__animated animate__bounceIn"
      w="100%"
      borderRadius={"xl"}
      borderBottomWidth={completed ? 3 : 6}
      borderColor={useColorModeValue("yellow.400", "purple.400")}
      px={4}
      py={6}
      h="5rem"
    >
      <Tooltip
        label="Click on the task to mark it as completed"
        placement="bottom"
        hasArrow
        openDelay={500}
      >
        <Flex
          alignItems="center"
          w="100%"
          h="4rem"
          onClick={(e) => {
            handleTaskCompleted(id);
          }}
        >
          <Text
            userSelect={"none"}
            color={completed ? taskTextCompleted : taskText}
            opacity={completed ? 0.7 : 1}
            as={completed ? "del" : ""}
            fontSize="lg"
          >
            {task}
          </Text>
        </Flex>
      </Tooltip>
      <Spacer minW=".5rem" />
      <Tooltip label="Delete task" placement="right" hasArrow openDelay={300}>
        <Button
          onClick={(e) => {
            e.preventDefault();
            handleDelete(id);
          }}
          color="black"
          borderWidth={2}
          borderColor={useColorModeValue("yellow.100", "purple.400")}
          colorScheme={useColorModeValue("yellow", "purple")}
        >
          <DeleteIcon opacity={0.7} />
        </Button>
      </Tooltip>
    </HStack>
  );
};

export default Task;
