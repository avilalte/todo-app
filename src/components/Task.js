import { Tooltip, HStack, Button, Spacer, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const Task = ({ task, id, completed, handleDelete, handleTaskCompleted }) => {
  return (
    <Tooltip label="Click on the task to mark it as completed">
      <HStack
        className="task"
        w="100%"
        bg="white"
        borderRadius={"lg"}
        borderBottomWidth={2}
        borderBottomColor="gray.300"
        px={3}
        py={6}
        h="8ch"
      >
        <Text
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
        <Tooltip label="Delete task">
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleDelete(id);
            }}
          >
            <DeleteIcon opacity={0.7} />
          </Button>
        </Tooltip>
      </HStack>
    </Tooltip>
  );
};

export default Task;
