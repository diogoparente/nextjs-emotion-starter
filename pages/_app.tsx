import Head from "next/head";
import { Global } from "@emotion/react";
import xw from "xwind";
import { ThemeProvider } from "next-themes";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
        <title>Tailwindcss Emotion Example</title>
      </Head>
      <Global
        //tailwind base styles + keyframes + ring and shadow classes variables  ... to global styles
        styles={xw`XWIND_BASE XWIND_GLOBAL`}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
