import { createBrowserRouter } from "react-router-dom";
import { Main, Settings, Shopping, Todo } from "../pages";
import { MainLayout } from "../shared";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Main />
      </MainLayout>
    ),
  },
  {
    path: "/todo",
    element: (
      <MainLayout>
        <Todo />
      </MainLayout>
    ),
  },
  {
    path: "/shopping",
    element: (
      <MainLayout>
        <Shopping />
      </MainLayout>
    ),
  },
  {
    path: "/settings",
    element: (
      <MainLayout>
        <Settings />
      </MainLayout>
    ),
  },
]);
