import React from "react";

// Components
import { Background } from "./components";

// Styles
import styles from "./styles";
import Form from "./components/Form";

function App() {
  const { backgroundColor } = styles;

  return (
    <Background color={backgroundColor}>
      <Form />
    </Background>
  );
}

export default App;
