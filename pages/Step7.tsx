import Head from "next/head";
import { GoTop } from "../components/GoTop";
import InOutWords from "../components/InOutWords";

export default function Step7() {
  return (
    <>
      <Head>
        <title>Step7</title>
      </Head>
      <h1 className="text-center">
        <div className="text-2xl p-5">Step7</div>
        <div className="text-3xl">input&output the Words</div>
      </h1>
      <InOutWords />
      <GoTop />
    </>
  );
}
