import { Flex } from "@chakra-ui/react";

type Props = {
  id: string;
  title: string;
  category: string;
  checked: boolean;
};

export const ListItem = ({ id, title, category, checked }: Props) => {
  return (
    <Flex padding="4px" margin="4px" backgroundColor="burlywood" width="100%">
      {title}
    </Flex>
  );
};
