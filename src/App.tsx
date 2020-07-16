import React from "react";

// Components
import { Background } from "./components";

// Styles
import styles from "./styles";

function App() {
  const { backgroundColor } = styles;

  return <Background color={backgroundColor}>Hello</Background>;
}

export default App;
