import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { CheckIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import {
  Icon,
  Spacer,
  VStack,
  Heading,
  Link,
  Flex,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Homework", completed: false },
    { id: 2, task: "Study", completed: true },
  ]);

  const handleAdd = (taskInput) => {
    if (taskInput.trim()) {
      const newTask = {
        task: taskInput
          .trim()[0]
          .toUpperCase()
          .concat(taskInput.trim().substring(1)),
        id: uuidv4(),
        completed: false,
      };
      setTasks([newTask, ...tasks]);
    }
  };
  const handleDelete = (id) => {
    const newList = tasks.filter((task) => task.id !== id);
    setTasks(newList);
  };
  const handleTaskCompleted = (id) => {
    const newList = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(newList);
  };
  const { colorMode, toggleColorMode } = useColorMode();

  const menuGradient = useColorModeValue(
    "linear(to-t, #fff9eeff, #fffcf0e5)",
    "linear(to-t, #66476d81, #cc9bd788)"
  );
  const appBg = useColorModeValue(
    "linear(to-b, #513a87, #684d98, #7f60a9, #9574bb, #ac89cd)",
    "linear(to-b, #191032, #1d153a, #211a43, #251f4c, #292455, #282556, #272656, #262757, #22234f, #1e2047, #1a1c3f, #161937)"
  );
  const menuBorderColor = useColorModeValue("yellow.400", "purple.400");

  return (
    <Flex
      w="100vw"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      minH="100vh"
      bgGradient={appBg}
      backgroundSize="cover"
      backgroundAttachment="fixed"
      px={5}
      py={5}
    >
      <Button
        alignSelf="end"
        colorScheme="yellow"
        borderRadius={"1rem"}
        onClick={toggleColorMode}
      >
        {colorMode !== "light" ? <SunIcon /> : <MoonIcon />}
      </Button>
      <VStack
        justifyContent="space-between"
        alignItems="center"
        maxW="600px"
        minW="300px"
        pb={2}
        spacing={10}
      >
        <CheckIcon
          color="pink.400"
          w="60px"
          h="60px"
          borderRadius={10}
          py={2}
          alignSelf="center"
          px={3}
          borderColor="yellow.400"
          borderBottomWidth={2}
        />
        <Heading
          className="animate__animated animate__pulse"
          bgGradient="linear(to-l, #ff6cfd, #ffe089)"
          bgClip="text"
          textAlign="center"
          as="h1"
          size="2xl"
          mb={1}
          // borderWidth={2}
          // borderColor="red"
          fontWeight="extrabold"
        >
          YET ANOTHER TODO APP
        </Heading>

        <TaskForm
          menuGradient={menuGradient}
          menuBorderColor={menuBorderColor}
          handleAdd={handleAdd}
        />
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          menuBorderColor={menuBorderColor}
          menuGradient={menuGradient}
          handleDelete={handleDelete}
          handleTaskCompleted={handleTaskCompleted}
        />
        <Spacer />
      </VStack>
      <Link
        textDecor="none"
        color="yellow.100"
        fontFamily=""
        textShadow="2px 1px #463a4ebc"
        href="https://github.com/avilalte"
        isExternal
        justifySelf='end'
      >
        <Icon as={BsGithub} w={30} h={30} color="yellow.100" />
      </Link>
    </Flex>
  );
}

export default App;
