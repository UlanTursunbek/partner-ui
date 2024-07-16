// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Flex } from "@mantine/core";
import "./App.css";
import { Main } from "./pages";

function App() {
  return (
    <Flex p={10} bg="blue" w={320} h={"100vh"}>
      <Main />
    </Flex>
  );
}

export default App;
