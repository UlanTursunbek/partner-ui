import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "shared";

import { Spinner, useToast } from "@chakra-ui/react";

import { URLs } from "../URLs";

export const ProtectedRoute = () => {
  const { user, loading, error } = useUser();
  const toast = useToast();

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

  return user ? <Outlet /> : <Navigate to={URLs.login} />;
};
