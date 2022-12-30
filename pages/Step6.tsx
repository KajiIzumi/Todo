import Head from "next/head";
import { Inter } from "@next/font/google";

export default function addNum() {
  return (
    <>
      <Head>
        <title>Step6</title>
      </Head>
      <main>
        <div className="text-center p-20 text-3xl">Step6 addNum</div>
        <div className="text-center">num</div>
        <button className="flex flex-col items-center">add</button>
      </main>
    </>
  );
}
