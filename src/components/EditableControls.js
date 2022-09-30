import {
  Flex,
  IconButton,
  ButtonGroup,
  useEditableControls,
} from "@chakra-ui/react";
import { CloseIcon, EditIcon, CheckIcon } from "@chakra-ui/icons";

function EditableControls() {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls();

  return isEditing ? (
    <ButtonGroup size="sm">
      <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
      <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
    </ButtonGroup>
  ) : (
    <Flex pb={2} pl={1} >
      <IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} />
    </Flex>
  );
}

export default EditableControls;
