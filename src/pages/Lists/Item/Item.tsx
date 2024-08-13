import { Flex } from "@chakra-ui/react";

type Props = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

export const ListItem = ({ id, title, description, completed }: Props) => {
  return (
    <Flex padding="4px" margin="4px" backgroundColor="burlywood" width="100%">
      {title}
    </Flex>
  );
};
