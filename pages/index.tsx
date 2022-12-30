import Head from "next/head";
import Link from "next/link";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
const number = [6, 7, 8, 9, 10, 11, 12, 13]; //連番配列を自動生成したい
const listSteps = number.map((item) => (
  <li className="p-2" key={item - 6}>
    {"Step" + item}
  </li>
));
// const start = 5;
// const end = 13;
// const listSteps = (start: any, end: number) => {
//   const l = [];
//   for (let i = start; i < end; i++) {
//     l.push("step" + i);
//   }
//   console.log(l);
//   console.log("aaa");

//   return l;
// };

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
