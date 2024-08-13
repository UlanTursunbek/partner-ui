import { URLs } from "app/router";
import { Link } from "react-router-dom";

import { Box, HStack } from "@chakra-ui/react";

export const Navigation = () => {
  const links = [URLs.root, URLs.lists, URLs.settings];

  return (
    <HStack
      gap="16px"
      justifyContent="space-around"
      bgColor="pink"
      height="52px"
      borderTopRadius="16px"
    >
      {links.map((it) => (
        <Link key={it} to={it}>
          <Box>{it}</Box>
        </Link>
      ))}
    </HStack>
  );
};
