import "@/app/globals.css";
import type { AppProps } from "next/app";

export function App({ Component, pageProps }: AppProps) {

  return <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-visible mx-auto sm:px-10 px-5">
    <div className="h-full w-full">
      <div className="h-full w-full bg-black-100 dark:bg-grid-white/[0.01] bg-grid-black/[0.1] flex items-center justify-center">
        <Component {...pageProps} />
      </div></div></main>;
}

export default App;