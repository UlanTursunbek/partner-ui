import { Flex } from "@mantine/core";
import { ShoppingList } from "../../features/ShoppingList";

export const Shopping = () => {
  return (
    <Flex w={320} h="100%" bg="pink" p={10}>
      <ShoppingList />
    </Flex>
  );
};
