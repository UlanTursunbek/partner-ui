import { Modal, Button, Group, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";

export const AddTodo = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      item: "",
    },
  });

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Add new item in to do list"
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

      <Button onClick={open} w={"100%"}>
        To do
      </Button>
    </>
  );
};
