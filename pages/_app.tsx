/* eslint-disable react/jsx-props-no-spreading */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { SnackbarProvider } from 'notistack';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <SnackbarProvider maxSnack={3} autoHideDuration={1000}>
        <Component {...pageProps} />
      </SnackbarProvider>
    </RecoilRoot>
  );
}

export default MyApp;
