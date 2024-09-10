import { useForm } from "react-hook-form";
import { useTodos } from "shared/hooks/useTodo";
import { MainLayout } from "widgets";

import {
  Button,
  Grid,
  HStack,
  Input,
  Spinner,
  useToast,
  VStack,
} from "@chakra-ui/react";

import { ListItem } from "./Item";

type Fields = {
  title: string;
};

export const Lists = () => {
  const toast = useToast();

  const { todos, loading, error, addTodo } = useTodos();
  const { register, handleSubmit } = useForm<Fields>();

  const onSubmit = (data: Fields) => {
    void addTodo({
      id: new Date().getTime().toString(),
      title: data.title,
      category: "todo",
      checked: false,
    });
  };

  if (loading) return <Spinner />;

  if (error) {
    return toast({
      title: error.name,
      description: error.message,
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }

  return (
    <MainLayout>
      <Grid width="100%" gridTemplateRows="1fr 48px">
        <VStack width="100%">
          {todos.map((it) => (
            <ListItem key={it.id} {...it} />
          ))}
        </VStack>

        <form onSubmit={handleSubmit(onSubmit)}>
          <HStack>
            <Input {...register("title")} />
            <Button type="submit">Add</Button>
          </HStack>
        </form>
      </Grid>
    </MainLayout>
  );
};
