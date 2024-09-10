import { useEffect } from "react";
import { auth } from "app/firebase";
import { URLs } from "app/router";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";

type Fields = {
  email: string;
  password: string;
};

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Fields>();
  const navigation = useNavigate();
  const toast = useToast();

  const [signInWithEmailAndPassword, _, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = (data: Fields) => {
    signInWithEmailAndPassword(data.email, data.password).then(() => {
      navigation(URLs.root);
    });
  };

  useEffect(() => {
    if (error) {
      toast({
        title: "Registration Error",
        description: error.message, // Error message from Firebase
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [error, toast]);

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Heading fontSize="3xl">Sign in to your account</Heading>

        <Box
          rounded="lg"
          bg={useColorModeValue("white", "gray.700")}
          boxShadow="lg"
          p={8}
        >
          <Stack spacing={4} as="form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" {...register("email", { required: true })} />
            </FormControl>

            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" {...register("password")} />
            </FormControl>

            <Stack spacing={10}>
              <Button
                bg="blue.400"
                color="white"
                _hover={{
                  bg: "blue.500",
                }}
                type="submit"
                isLoading={loading}
              >
                Sign in
              </Button>
            </Stack>

            <Stack pt={6}>
              <Text align="center">
                Don't have an account?{" "}
                <NavLink to={URLs.registration}>
                  <Box as="span" color="blue.400">
                    Sign up
                  </Box>
                </NavLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
