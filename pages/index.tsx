import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });
const steps = [
  "step6",
  "step7",
  "step8",
  "step9",
  "step10",
  "step10",
  "step11",
  "step12",
  "step13",
];
const listSteps = steps.map((item) => <li>{item}</li>);

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo</title>
      </Head>
      <main>
        <div className="text-yellow-300 text-5xl font-semibold p-16">
          TodoList!!
        </div>
        <div className="text-2xl list-disc p-5">{listSteps}</div>
      </main>
    </>
  );
}
