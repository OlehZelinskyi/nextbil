import React from "react";

// Components
import { Background } from "./components";

// Styles
import styles from "./styles";
import Form from "./components/Form";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://homework.nextbil.com/graphql",
});

function App() {
  const { backgroundColor } = styles;

  return (
    <ApolloProvider client={client}>
      <Background color={backgroundColor}>
        <Form />
      </Background>
    </ApolloProvider>
  );
}

export default App;
