import { Flex } from "@mantine/core";
import { AddTodo } from "../../features";

export const Todo = () => {
  return (
    <Flex w={320} h="100%" bg="orange" p={10}>
      <AddTodo />
    </Flex>
  );
};
