import {
  Tooltip,
  Spacer,
  Input,
  Button,
  VStack,
  HStack,
  useColorModeValue,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, deleteCompleted } from "../features/tasks/tasksSlice";
import { v4 as uuidv4 } from "uuid";
import "animate.css";
import {
  focusBorderColor,
  menuBorderColor,
  menuGradient,
} from "../app/colorModeStyles";

const TaskForm = ({ useStyle }) => {
  const dispatch = useDispatch();
  const [taskInput, setTaskInput] = useState({
    title: "",
    description: "",
    completed: false,
  });
  const toast = useToast();
  const handleChange = (e) => {
    setTaskInput({ ...taskInput, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.title.trim()) {
      dispatch(
        addTask({
          ...taskInput,
          title: taskInput.title
            .trim()[0]
            .toUpperCase()
            .concat(taskInput.title.trim().substring(1)),
          id: uuidv4(),
        })
      );
      setTaskInput({ title: "", description: "", completed: false });
      toast({
        title: "You added a new task.",
        description: "The task was successfully added to the list.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-left",
      });
    } else {
      toast({
        title: "There was an error.",
        description: "Title can't be empty. Please enter a valid title.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-left",
      });
    }
  };

  return (
    <form className="form" action="submit" onSubmit={(e) => handleSubmit(e)}>
      <VStack
        w="100%"
        boxShadow={"md"}
        p={4}
        borderRadius="lg"
        borderBottomWidth={6}
        borderColor={useStyle(menuBorderColor)}
        bgGradient={useStyle(menuGradient)}
        className="animate__animated animate__pulse"
      >
        <HStack w="100%" p={2}>
          <Input
            onChange={(e) => handleChange(e)}
            size="lg"
            autoFocus
            placeholder="Write down a task"
            name="title"
            _placeholder={{
              color: useColorModeValue("gray.400", "gray.600"),
              fontSize: "1rem",
            }}
            color={useColorModeValue("default", "gray.800")}
            value={taskInput.title}
            bg={useColorModeValue("#fcf5ff", "#d2bff3")}
            borderWidth={1}
            maxLength={35}
            borderColor={useStyle(menuBorderColor)}
            focusBorderColor={useStyle(focusBorderColor)}
          />
          <Spacer minW=".1rem" />
          <Tooltip label="Add new task" placement="right" hasArrow>
            <Button
              type="submit"
              size="lg"
              shadow="md"
              colorScheme={useColorModeValue("yellow", "pink")}
              borderBottomWidth={3}
              borderColor={useStyle(menuBorderColor)}
            >
              <AddIcon />
            </Button>
          </Tooltip>
        </HStack>
        <HStack gap={3} w="100%" alignSelf="start" p={2}>
          <Textarea
            onKeyDown={(e) => (e.key === "Enter" ? handleSubmit(e) : null)}
            resize="none"
            size="lg"
            maxWidth="85%"
            onChange={(e) => handleChange(e)}
            minHeight="70px"
            maxLength={100}
            placeholder="Add details (Optional)"
            _placeholder={{
              color: useColorModeValue("gray.400", "gray.600"),
              fontSize: "1rem",
            }}
            name="description"
            value={taskInput.description}
            bg={useColorModeValue("#fcf5ff", "#d2bff3")}
            color={useColorModeValue("default", "gray.800")}
            borderColor={useColorModeValue("yellow.400", "purple.400")}
            focusBorderColor={useColorModeValue("#ffd7fe", "purple.400")}
          />
          <Tooltip label="Delete completed tasks" placement="right" hasArrow>
            <Button
              onClick={() => dispatch(deleteCompleted())}
              shadow="md"
              size="lg"
              colorScheme={useColorModeValue("yellow", "pink")}
              borderBottomWidth={3}
              borderColor={useStyle(menuBorderColor)}
            >
              <DeleteIcon />
            </Button>
          </Tooltip>
        </HStack>
      </VStack>
    </form>
  );
};

export default TaskForm;
