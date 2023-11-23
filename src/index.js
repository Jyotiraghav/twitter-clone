import { createRoot } from "react-dom/client";
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App tab="home" />);

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphiql",
});

const AppContainer = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

root.unmount();

serviceWorker.register();
