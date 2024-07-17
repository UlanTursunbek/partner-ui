import { Flex } from "@mantine/core";
import { QuickMenu } from "../../features";

export const Main = () => {
  return (
    <Flex w={320} h="100%" bg="blue" justify={"center"}>
      <QuickMenu />
    </Flex>
  );
};
