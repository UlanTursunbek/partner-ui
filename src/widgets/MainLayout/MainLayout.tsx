import { Flex } from "@mantine/core";
import { ReactNode } from "react";
import { Navigation } from "../Navigation";

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <Flex
      bg={"grey"}
      h={"100vh"}
      w={"100%"}
      align={"center"}
      direction={"column"}
    >
      <Flex w={430} h={"100%"} direction={"column"}>
        <Flex h={"100%"}>{children}</Flex>
        <Navigation />
      </Flex>
    </Flex>
  );
};
