import Head from "next/head";
import Link from "next/link";
import { Adder } from "../components/Adder";
import { GoTop } from "../components/GoTop";

export default function Step6() {
  //プルリクエストテスト
  return (
    <>
      <Head>
        <title>Step6</title>
      </Head>
      <main>
        <div className="text-center p-20 text-3xl">Step6 addNum</div>
        <Adder />
        <GoTop />
      </main>
    </>
  );
}
