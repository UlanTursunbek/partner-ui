import { Modal, Button, TextInput, Group } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";

export const ShoppingList = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      item: "",
    },
  });

  return (
    <>
      <div onClick={(e) => e.stopPropagation()}>
        <Button onClick={open} w={"100%"}>
          Shopping list
        </Button>
      </div>

      <Modal
        opened={opened}
        onClose={close}
        title="Add new item in shopping list"
        centered
      >
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            placeholder="New item"
            key={form.key("item")}
            required
            {...form.getInputProps("item")}
          />

          <Group justify="flex-end" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Modal>
    </>
  );
};
