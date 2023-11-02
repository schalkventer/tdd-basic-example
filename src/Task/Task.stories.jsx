import { Task } from "./Task";

export default {
  title: "components/Task",

  parameters: {
    layout: "centered",
  },
};

export const Basic = () => <Task title="Hello World" />;

export const LongTitle = () => (
  <Task title="Hello World as asd asd  das das das das das das das das das das das das das das  das" />
);
