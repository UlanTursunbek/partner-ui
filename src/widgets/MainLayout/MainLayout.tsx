import { ReactNode } from "react";
import { QuickAction } from "components";

import { Container, Flex, Grid } from "@chakra-ui/react";

import { Navigation } from "../Navigation";

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <Container
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="100dvh"
      padding={0}
      maxWidth="430px"
    >
      <Grid gridTemplateRows="auto 52px 52px" height="100%">
        <Flex flex="1 1 auto">{children}</Flex>

        <QuickAction />

        <Navigation />
      </Grid>
    </Container>
  );
};
