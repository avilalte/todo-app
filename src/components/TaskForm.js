import { useState } from "react";
import {
  Tooltip,
  Spacer,
  Input,
  Button,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import "animate.css";

const TaskForm = ({ menuBorderColor, menuGradient, handleAdd }) => {
  const [taskInput, setTaskInput] = useState("");

  return (
    <form
      className="form"
      action="submit"
      onSubmit={(e) => {
        e.preventDefault();
        handleAdd(taskInput);
        setTaskInput("");
      }}
    >
      <HStack
        boxShadow={"md"}
        w="100%"
        p="1rem"
        mb="1rem"
        borderRadius="lg"
        borderBottomWidth={4}
        borderColor={menuBorderColor}
        bgGradient={menuGradient}
        className="animate__animated animate__pulse"
      >
        <Input
          size="lg"
          placeholder="Write down a task"
          _placeholder={{
            color: useColorModeValue("default", "purple.100"),
          }}
          color={useColorModeValue("default", "gray.800")}
          value={taskInput}
          bg={useColorModeValue("#fcf5ff", "#b29cd8")}
          onChange={(e) => setTaskInput(e.target.value)}
          borderWidth={2}
          maxLength={25}
          borderColor={useColorModeValue("yellow.400", "#551a90.700")}
          focusBorderColor={useColorModeValue("#ffd7fe", "#673e79")}
          wordBreak={5}
        />
        <Spacer minW=".1rem" />
        <Tooltip label="Add new task" placement="right" hasArrow>
          <Button
            type="submit"
            size="lg"
            colorScheme={useColorModeValue("yellow", "purple")}
          >
            <AddIcon />
          </Button>
        </Tooltip>
      </HStack>
    </form>
  );
};

export default TaskForm;
