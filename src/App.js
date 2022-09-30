import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
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
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { appBg } from "./app/colorModeStyles";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state);
  const { colorMode, toggleColorMode } = useColorMode();
  const statsColor = useColorModeValue("yellow.100", "purple.100");
  const useStyle = (style) => {
    return useColorModeValue(...style);
  };
  return (
    <Flex
      w="100%"
      flexDirection="column"
      alignItems="center"
      minH="100vh"
      bgGradient={useStyle(appBg)}
      backgroundSize="cover"
      backgroundAttachment="fixed"
      px={5}
      pt={5}
    >
      <Button
        position='fixed'
        zIndex="1"
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
        spacing={5}
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
          py={7}
          fontWeight="extrabold"
        >
          YET ANOTHER TODO APP
        </Heading>

        <TaskForm useStyle={useStyle} />
        {state.tasks.length ? (
          <Text color={statsColor} alignSelf="center" m={5}>
            Total: {state.tasks.length} | Completed:{" "}
            {state.tasks.filter((task) => task.completed === true).length}
          </Text>
        ) : null}
        <TaskList useStyle={useStyle} />
        <Spacer />
      </VStack>
      <Link
        textDecor="none"
        color="yellow.100"
        textShadow="2px 1px #463a4ebc"
        href="https://github.com/avilalte"
        isExternal
        mt="7rem"
      >
        <Icon as={BsGithub} w={30} h={30} color="yellow.100" />
      </Link>
    </Flex>
  );
}

export default App;
