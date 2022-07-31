/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Head from "next/head";
import Header from "../components/organisems/Header";

function Home() {
  return (
    <div>
      <Head>
        <title>Note App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="App bg-slate-900 min-h-screen w-full text-white pb-20">
        <Header />
        <main className="flex flex-col items-center mt-10 gap-4" />
      </div>
    </div>
  );
}

export default Home;
