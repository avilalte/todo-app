// First element of the array is for light mode. Second element for dark mode.

const colorModeStyles = {
  menuBorderColor: ["yellow.400", "purple.400"],
  statsColor: ["yellow.100", "purple.100"],
  taskText: ["default", "gray.800"],
  taskTextCompleted: ["default", "gray.900"],
  taskGradientCompleted: ["default", "gray.900"],
  descriptionEditText: ["default", "white"],
  noTasksColor: ["yellow.200", "pink.200"],
  focusBorderColor: ["#ffd7fe", "purple.400"],
  menuGradient: [
    "linear(to-t, #fff9eeff, #fffcf0e5)",
    "linear(to-t, #66476d81, #cc9bd788)",
  ],
  taskGradient: [
    "linear(to-t, #faf4dbfb, #fffdf99b )",
    "linear(to-t, #bbbbe2 0, #b2a6d4 50%, #9b92c6 100% )",
  ],
  appBg: [
    "linear(to-b, #513a87, #684d98, #7f60a9, #9574bb, #ac89cd)",
    "linear(to-b, #191032, #1d153a, #211a43, #251f4c, #292455, #282556, #272656, #262757, #22234f, #1e2047, #1a1c3f, #161937)",
  ],
};

export const {
  menuBorderColor,
  statsColor,
  taskText,
  taskTextCompleted,
  taskGradientCompleted,
  descriptionEditText,
  noTasksColor,
  focusBorderColor,
  menuGradient,
  appBg,
  taskGradient,
} = colorModeStyles;
