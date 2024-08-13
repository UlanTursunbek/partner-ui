import { QuickAction } from "components";
import { MainLayout } from "widgets";

import { Flex, Grid } from "@chakra-ui/react";

export const Main = () => {
  return (
    <MainLayout>
      <Grid gridTemplateRows="auto 52px">
        <Flex flex="1 1 auto">Main</Flex>
        <QuickAction />
      </Grid>
    </MainLayout>
  );
};
