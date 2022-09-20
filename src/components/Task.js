import {
  Tooltip,
  HStack,
  Button,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import "animate.css";

const Task = ({ task, id, completed, handleDelete, handleTaskCompleted }) => {
  const taskGradientCompleted = useColorModeValue(
    "linear(to-t, #eccbff91, #c4b2d25d )",
    "linear(to-t, #5050509b, #9c9c9c5d )"
  );
  const taskGradient = useColorModeValue(
    "linear(to-t, #faf4dbfb, #fffdf99b )",
    "linear(to-t, #3d346dff, #634a86fc )"
  );
  return (
    <Tooltip
      label="Click on the task to mark it as completed"
      placement="left"
      hasArrow
    >
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
        <Text
          mt={2}
          color={useColorModeValue("default", "gray.200")}
          opacity={completed ? 0.7 : 1}
          as={completed ? "del" : ""}
          fontSize="lg"
          onClick={(e) => {
            handleTaskCompleted(id);
          }}
        >
          {task}
        </Text>
        <Spacer minW="2rem" />
        <Tooltip label="Delete task" placement="right" hasArrow>
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleDelete(id);
            }}
            color="black"
            colorScheme={useColorModeValue("yellow", "purple")}
          >
            <DeleteIcon opacity={0.7} />
          </Button>
        </Tooltip>
      </HStack>
    </Tooltip>
  );
};

export default Task;
