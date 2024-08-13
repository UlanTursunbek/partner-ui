import { useTodos } from "shared/hooks/useTodo";
import { MainLayout } from "widgets";

import { VStack } from "@chakra-ui/react";

import { ListItem } from "./Item";

export const Lists = () => {
  const { todos, loading, error } = useTodos();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log("snapshot", todos);

  return (
    <MainLayout>
      <VStack width="100%">
        {todos.map((it) => (
          <ListItem key={it.id} {...it} />
        ))}
      </VStack>
    </MainLayout>
  );
};
