import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";
import store from "src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persister } from "src/redux/store";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Toaster />
      <PersistGate persistor={persister} loading={null}>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

// persister.subscribe(() => {
//   const { bootstrapped } = persister.getState();
//   if (bootstrapped) {
//     ReactDOM.hydrate(<App />, document.getElementById("root"));
//   }
// });
