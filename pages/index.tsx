/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Head from "next/head";
import FormAddNote from "../components/molecules/Form/FormAddNote";
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
        <main className="flex flex-col items-center mt-10 gap-4">
          <div className="w-full mx-10 sm:mx-0 sm:w-6/12 bg-slate-800 py-4 px-6 rounded-md">
            <h1 className="font-semibold text-md mb-10">Buat Catatan</h1>
            <FormAddNote />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
