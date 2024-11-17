import React from "https://cdn.skypack.dev/react";
import { Container, Title } from "https://cdn.skypack.dev/@mantine/core";
import MessageCard from "./components/MessageCard.tsx";

const App = () => {
  return (
    <Container>
      <Title align="center" mb="lg">Rust + Deno + React</Title>
      <MessageCard />
    </Container>
  );
};

export default App;
