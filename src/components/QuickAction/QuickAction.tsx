import { SubmitHandler, useForm } from "react-hook-form";

import { Button, FormControl, HStack, Input, Select } from "@chakra-ui/react";

type Fields = {
  category: string;
  value: string;
};

export const QuickAction = () => {
  const { register, handleSubmit } = useForm<Fields>();

  const onSubmit: SubmitHandler<Fields> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <HStack>
        <FormControl width="180px">
          <Select
            size="sm"
            placeholder="Category"
            height="40px"
            borderRadius="8px"
            {...register("category")}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option2">Option 2</option>
            <option value="option2">Option 2</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormControl>

        <FormControl>
          <Input
            height="40px"
            placeholder="Add action"
            {...register("value")}
          />
        </FormControl>

        <Button height="40px" width="40px" colorScheme="green" type="submit">
          +
        </Button>
      </HStack>
    </form>
  );
};
