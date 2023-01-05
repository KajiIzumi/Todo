import Head from "next/head";
import Link from "next/link";
import { Adder } from "../components/Adder";

export default function addNum() {
  return (
    <>
      <Head>
        <title>Step6</title>
      </Head>
      <main>
        <div className="text-center p-20 text-3xl">Step6 addNum</div>
        <Adder />
        <Link href="/">
          <div className="text-center p-20 text-xl">Go Top</div>
        </Link>
      </main>
    </>
  );
}
