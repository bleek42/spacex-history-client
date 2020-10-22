import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Rockets from "./components/Rockets/Rockets";
import Launches from "./components/Launches/Launches";
import History from "./components/History/History";
import musk from "./images/elon-musk-memes-.jpg";
import NavSearchBar from "./components/NavSearchBar/NavSearchBar";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <NavSearchBar />
      <div className="App">
        <img id="musk" src={musk} alt="musk-breh" />
      </div>
      <Rockets />
      <Launches />
    </ApolloProvider>
  );
};

export default App;
