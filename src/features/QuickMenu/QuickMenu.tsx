import { Button, Grid, GridCol, Menu } from "@mantine/core";
import { AddTodo } from "../AddTodo";
import { ShoppingList } from "../ShoppingList";

export const QuickMenu = () => {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button variant="filled" color="yellow" size="lg">
          +
        </Button>
      </Menu.Target>

      <Menu.Dropdown display={"grid"}>
        <Grid>
          <GridCol>
            <ShoppingList />
          </GridCol>
          <GridCol>
            <AddTodo />
          </GridCol>
        </Grid>
        <Menu.Item>SETTINGS</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
