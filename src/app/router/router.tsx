import { Login, Register } from "pages/Auth";
import { createBrowserRouter, Outlet } from "react-router-dom";

import { Lists, Main, Settings } from "../../pages";

import { ProtectedRoute } from "./ProtectedRoute";
import { URLs } from "./URLs";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      children: [
        {
          element: <ProtectedRoute />,
          shouldRevalidate: () => false,
          children: [
            {
              index: true,
              element: <Main />,
            },
            {
              path: URLs.lists,
              element: <Lists />,
            },
            {
              path: URLs.settings,
              element: <Settings />,
            },
          ],
        },
        {
          element: <Outlet />,
          children: [
            {
              path: URLs.registration,
              element: <Register />,
            },
            {
              path: URLs.login,
              element: <Login />,
            },
          ],
        },
        {
          path: "*",
          element: "not founbd",
        },
      ],
    },
  ],
  {
    basename: "/partner-ui/",
  }
);
