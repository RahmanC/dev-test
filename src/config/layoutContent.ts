export const layoutContent = {
  calendar: {
    title: "Calendar widget",
    description:
      "Calendar widget with clear timezone differences information. Click on the widget to interact with it.",
    tags: ["React", "Tailwind css", "Motion (prev.Framer motion)"],
    navigation: {
      next: {
        text: "Next task",
        path: "/toolbar",
      },
    },
  },
  toolbar: {
    title: "Contextual toolbar",
    description: `A toolbar that suggests and enables actions based on users' navigation.
    Suggestions are related to the current page and users can perform actions inside the component, without changing to another page or context.`,
    tags: ["React", "Tailwind css", "Motion (Framer motion)"],
    navigation: {
      previous: {
        text: "Previous task",
        path: "/",
      },
    },
  },
};
