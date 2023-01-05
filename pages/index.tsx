import Head from "next/head";
import Link from "next/link";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
const number = [6, 7, 8, 9, 10, 11, 12, 13];
const listSteps = number.map((item, index) => (
  <Link href={`/Step${item}`} key={index}>
    <li className="p-2" key={item - 6}>
      Step{item}
    </li>
  </Link>
));

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo</title>
      </Head>
      <main>
        <div className="text-red-500 text-5xl font-semibold p-16">
          TodoList!!
        </div>
        <ul className="text-2xl list-disc p-10">{listSteps}</ul>
      </main>
    </>
  );
}
