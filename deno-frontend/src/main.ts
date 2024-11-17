
import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
import App from "./App.tsx";
import { MantineProvider } from "https://cdn.skypack.dev/@mantine/core";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <App />
  </MantineProvider>,
  rootElement
);

