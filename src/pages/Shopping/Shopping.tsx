import { Flex } from "@mantine/core";
import { AddShopping } from "../../features/AddShopping";

export const Shopping = () => {
  return (
    <Flex w={"100%"} h="100%" bg="pink" p={10}>
      <AddShopping />
    </Flex>
  );
};
