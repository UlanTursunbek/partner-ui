import { db } from "app/firebase";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

type Todo = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

export const useTodos = () => {
  const todosRef = collection(db, "todos");
  const [snapshot, loading, error] = useCollection(todosRef);

  const todos: Todo[] =
    snapshot?.docs.map((doc) => {
      const data = doc.data();

      return {
        id: doc.id, // Include the document ID
        title: data.title || "Untitled",
        description: data.description || "No description",
        completed: data.completed || false,
      };
    }) ?? [];

  return { todos, loading, error };
};
