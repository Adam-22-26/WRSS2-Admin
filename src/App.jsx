import React from "react";
import "./assets/styles/style";

import Router from "./router/Router";
import { Provider } from "react-redux";
import store from "./lib/store/store";
import theme from "./config/chakra.config";
import AppProvider from "./hooks/AppProvider"; // route protection
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
          <AppProvider>
            <Router />
          </AppProvider>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
