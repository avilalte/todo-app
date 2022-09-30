import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  editTask,
  toggleComplete,
} from "../features/tasks/tasksSlice";
import "animate.css";
import { useState } from "react";
import {
  Tooltip,
  HStack,
  Button,
  Spacer,
  Text,
  Input,
  useColorModeValue,
  Flex,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Editable,
  EditableInput,
  Divider,
  EditableTextarea,
  EditablePreview,
  useToast,
} from "@chakra-ui/react";
import EditableControls from "./EditableControls";

const Task = ({ title, id, completed, description }) => {
  const taskGradientCompleted = useColorModeValue(
    "linear(to-t, #cbb8d691, #ab9cb75d )",
    "linear(to-t, #7575759b, #aeaeae5d )"
  );
  const taskGradient = useColorModeValue(
    "linear(to-t, #faf4dbfb, #fffdf99b )",
    "linear(to-t, #bbbbe2 0, #b2a6d4 50%, #9b92c6 100% )"
  );
  const { onOpen, onClose, isOpen } = useDisclosure();
  const taskText = useColorModeValue("default", "gray.800");
  const taskTextCompleted = useColorModeValue("default", "gray.900");
  const descriptionEditText = useColorModeValue("default", "white");
  const [taskEdit, setTaskEdit] = useState({
    title: title,
    description: description,
  });
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTask(id));
  };
  const toast = useToast();
  const handleEdit = () => {
    if (taskEdit.title.trim().length) {
      dispatch(editTask({ taskEdit, id }));
      onClose();
    } else {
      toast({
        title: "Title missing",
        description: "You need to specify a name for your task",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-left",
      });
    }
  };
  return (
    <>
      <HStack
        shadow="md"
        bgGradient={completed ? taskGradientCompleted : taskGradient}
        className="task animate__animated animate__pulse"
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
            onClick={(e) => {
              dispatch(toggleComplete(id));
            }}
            alignItems="center"
            w="100%"
            h="4rem"
          >
            <Text
              userSelect={"none"}
              color={completed ? taskTextCompleted : taskText}
              opacity={completed ? 0.7 : 1}
              as={completed ? "del" : ""}
              fontSize="lg"
              noOfLines={[1, 2, 3]}
            >
              {title}
            </Text>
          </Flex>
        </Tooltip>
        <Spacer minW=".5rem" />
        <Tooltip
          label="View/Edit task"
          placement="top"
          hasArrow
          openDelay={300}
        >
          <Button
            px={6}
            gap={3}
            variant={completed ? "ghost" : null}
            onClick={onOpen}
            color="black"
            disabled={completed ? true : false}
            shadow="md"
            colorScheme={useColorModeValue("yellow", "purple")}
          >
            <ViewIcon />
            {/* <EditIcon opacity={0.7} /> */}
          </Button>
        </Tooltip>
        <Tooltip label="Delete task" placement="right" hasArrow openDelay={300}>
          <Button
            onClick={handleDelete}
            color="black"
            shadow="md"
            colorScheme={useColorModeValue("yellow", "purple")}
          >
            <DeleteIcon opacity={0.7} />
          </Button>
        </Tooltip>
      </HStack>

      <Modal
        motionPreset="slideInBottom"
        size="xl"
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay
          bg="blackAlpha.200"
          backdropFilter="blur(2px) hue-rotate(10deg)"
        />
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            textShadow={"1px 1px 3px black"}
            color="white"
            bg="yellow.400"
          >
            <Text>Selected task &gt; {taskEdit.title || title}</Text>{" "}
          </ModalHeader>
          <ModalBody>
            <Text fontSize="md" my={2}>
              Title
            </Text>
            <Editable
              fontFamily="Chilanka"
              fontSize={18}
              fontWeight="bold"
              defaultValue={title}
              isPreviewFocusable={false}
            >
              <HStack mb={2}>
                <EditablePreview display="inline" px={2} maxW="60%" />
                <EditableControls display="inline" />
                <Input
                  onChange={(e) =>
                    setTaskEdit({ ...taskEdit, title: e.target.value })
                  }
                  onBlur={(e) => {
                    !taskEdit.title.length
                      ? setTaskEdit({ ...taskEdit, title: title })
                      : setTaskEdit({ ...taskEdit });
                  }}
                  display="inline"
                  as={EditableInput}
                  px={2}
                  maxW="60%"
                  minLength={1}
                />
              </HStack>
            </Editable>
            <Divider />
            <Text mt={3} mb={1} fontSize="md">
              Description
            </Text>
            <Editable
              minH="70px"
              placeholder="Edit task description"
              defaultValue={description}
            >
              <EditableTextarea
                onChange={(e) =>
                  setTaskEdit({
                    ...taskEdit,
                    description: e.target.value.trim(),
                  })
                }
                my={2}
                px={2}
                minH="70px"
                maxH="400px"
                maxLength={500}
              />
              <EditablePreview
                px={2}
                my={2}
                color={
                  taskEdit.description ? { descriptionEditText } : "gray.400"
                }
              />
              <EditableControls display="inline" />
            </Editable>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                onClose();
              }}
              colorScheme="purple"
            >
              Cancel
            </Button>
            <Spacer />
            <Button onClick={handleEdit} colorScheme="yellow">
              Save changes
            </Button>
          </ModalFooter>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
};

export default Task;
