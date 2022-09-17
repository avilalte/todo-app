import { useState } from "react";
import { Spacer, Input, Button, HStack } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const TaskForm = ({ handleAdd }) => {
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
        bg="white"
        borderRadius="lg"
      >
        <Input
          size="lg"
          placeholder="Write down a task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <Spacer minW=".1rem" />
        <Button type="submit" size="lg">
          Add
          <AddIcon ms={2} />
        </Button>
      </HStack>
    </form>
  );
};

export default TaskForm;
