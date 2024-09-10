import { db } from "app/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

import { useToast } from "@chakra-ui/react";

type Todo = {
  id: string;
  title: string;
  category: string;
  checked: boolean;
};

export const useTodos = () => {
  const todosRef = collection(db, "todos");
  const [snapshot, loading, error] = useCollection(todosRef);
  const toast = useToast();

  const addTodo = async (payload: Todo) => {
    try {
      await addDoc(todosRef, {
        id: payload.id,
        title: payload.title,
        category: payload.category,
        checked: payload.checked,
      });
    } catch (err: any) {
      toast({
        title: err?.name,
        description: err?.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const todos: Todo[] =
    snapshot?.docs.map((doc) => {
      const data = doc.data();

      return {
        id: doc.id,
        title: data.title,
        category: data.category,
        checked: data.checked || false,
      };
    }) ?? [];

  return { todos, loading, error, addTodo };
};
