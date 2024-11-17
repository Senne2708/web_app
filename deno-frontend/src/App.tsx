/** @jsx React.createElement */
import React from "https://esm.sh/react@18.2.0";
import MessageCard from "./components/MessageCard.tsx";

const App = () => {
  return React.createElement(
    "div",
    {
      style: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px"
      }
    },
    React.createElement(
      "h1",
      {
        style: {
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "24px",
          fontWeight: "bold"
        }
      },
      "Rust + Deno + React"
    ),
    React.createElement(MessageCard)
  );
};

export default App;