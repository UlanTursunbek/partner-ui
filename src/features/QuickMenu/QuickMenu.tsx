import { Button, Menu } from "@mantine/core";

export const QuickMenu = () => {
  return (
    <Menu shadow="md" width={200} opened>
      <Menu.Target>
        <Button variant="filled" color="yellow" size="lg">
          +
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>SHOPPING LIST</Menu.Item>
        <Menu.Item>TO DO</Menu.Item>
        <Menu.Item>SETTINGS</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
