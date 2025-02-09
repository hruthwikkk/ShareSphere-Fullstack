import "@/app/globals.css";
import type { AppProps } from "next/app";

export function App({ Component, pageProps }: AppProps) {

  return <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <div className="h-screen w-full bg-black-100 dark:bg-grid-white/[0.01] bg-grid-black/[0.1] flex items-center justify-center">
        <Component {...pageProps} />
      </div></div></main>;
}

export default App;