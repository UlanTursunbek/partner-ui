// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Flex } from "@mantine/core";
import "./App.css";
import { Main, Settings, Shopping, Todo } from "./pages";

function App() {
  return (
    <Flex p={10} h={"100vh"}>
      <Main />
      <Todo />
      <Shopping />
      <Settings />
    </Flex>
  );
}

export default App;
