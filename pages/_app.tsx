import "@/app/globals.css";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import type { AppProps } from "next/app";

export function App({ Component, pageProps }: AppProps) {

  return <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-visible">
    <div className="max-w-7xl w-full">
      <div className="hidden md:hidden">
        <FloatingNav navItems={navItems} />
      </div>
      <div className="h-full w-full bg-black-100 dark:bg-grid-white/[0.01] bg-grid-black/[0.1] flex items-center justify-center ">
        <Component {...pageProps} />
      </div></div></main>;
}

export default App;