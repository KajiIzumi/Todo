import Head from "next/head";
import Link from "next/link";
import { Adder } from "../components/Adder";
import { GoTop } from "../components/GoTop";
import Header from "../components/Header";

export default function Step6() {
  //プルリクエストテスト
  return (
    <>
      <main>
        <Header stepNum="6" title="addNum" />
        <Adder />
        <GoTop />
      </main>
    </>
  );
}
