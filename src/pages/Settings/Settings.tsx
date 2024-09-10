import { useEffect } from "react";
import { auth } from "app/firebase";
import { useSignOut } from "react-firebase-hooks/auth";
import { MainLayout } from "widgets";

import { Button, Flex, useToast } from "@chakra-ui/react";

export const Settings = () => {
  const [signOut, loading, error] = useSignOut(auth);
  const toast = useToast();

  useEffect(() => {
    if (error) {
      toast({
        title: "Logout Error",
        description: error.message, // Error message from Firebase
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [error, toast]);

  const logout = () => {
    signOut();
  };

  return (
    <MainLayout>
      <Flex>
        <Button onClick={logout}>Log out</Button>
      </Flex>
    </MainLayout>
  );
};
