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
        w='100%'
        p={4}
        borderRadius="lg"
        borderBottomWidth={6}
        borderColor={menuBorderColor}
        bgGradient={menuGradient}
        className="animate__animated animate__pulse"
      >
        <Input
          size="lg"
          autoFocus
          placeholder="Write down a task"
          _placeholder={{
            color: useColorModeValue("default", "gray.800"),
          }}
          color={useColorModeValue("default", "gray.800")}
          value={taskInput}
          bg={useColorModeValue("#fcf5ff", "#b29cd8")}
          onChange={(e) => setTaskInput(e.target.value)}
          borderWidth={1}
          maxLength={25}
          borderColor={useColorModeValue("yellow.400", "purple.400")}
          focusBorderColor={useColorModeValue("#ffd7fe", "purple.400")}
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
