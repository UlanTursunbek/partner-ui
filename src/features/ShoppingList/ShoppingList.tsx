import { ActionIcon, Checkbox, Flex, List, Text } from "@mantine/core";
import { useAppSelector } from "app/store/hooks";
import { useState } from "react";
import { SlTrash } from "react-icons/sl";

type List = {
  id: number;
  name: string;
  selected: boolean;
};

export const ShoppingList = () => {
  const [list, setList] = useState<List[]>([
    { id: 1, name: "Item 1", selected: false },
    { id: 2, name: "Item 2", selected: false },
    { id: 3, name: "Item 3", selected: true },
    { id: 4, name: "Item 4", selected: false },
  ]);
  const sortedList = list.slice().sort((a, b) => a.selected - b.selected);

  return (
    <div>
      {sortedList.map((item) => (
        <div key={item.id}>
          <Flex
            align={"center"}
            gap={8}
            justify={"space-between"}
            mx={10}
            h={40}
          >
            <Checkbox
              checked={item.selected}
              onChange={(event) => {
                setList((prev) =>
                  prev.map((i) =>
                    i.id === item.id
                      ? { ...i, selected: event.target.checked }
                      : i
                  )
                );
              }}
            />
            <Text w="100%" td={item.selected ? "line-through" : ""}>
              {item.name}
            </Text>

            {/* <ActionIcon >
              <SlPencil />
            </ActionIcon> */}
            <ActionIcon
              onClick={() =>
                setList((prev) => prev.filter((i) => i.id !== item.id))
              }
            >
              <SlTrash />
            </ActionIcon>
          </Flex>
        </div>
      ))}
    </div>
  );
};
