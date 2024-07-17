import { Flex } from "@mantine/core";
import { ShoppingList } from "features";

export const Main = () => {
  return (
    <Flex w={"100%"} h="100%" bg="blue" direction={"column"}>
      Main
      <ShoppingList />
    </Flex>
  );
};
