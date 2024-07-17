import { Group } from "@mantine/core";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <Group
      bg={"red"}
      w={"100%"}
      justify="space-evenly"
      p={5}
      py={10}
      wrap="nowrap"
    >
      <Link to={"/"}>Main</Link>
      <Link to={"/todo"}>todo</Link>
      <Link to={"/shopping"}>shopping</Link>
      <Link to={"/settings"}>Settings</Link>
    </Group>
  );
};
