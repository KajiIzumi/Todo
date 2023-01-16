import Head from "next/head";
import { GoTop } from "../components/GoTop";
import Header from "../components/Header";
import InOutWords from "../components/InOutWords";

export default function Step7() {
  return (
    <>
      <Header stepNum="7" title="input&output the Words" />
      <InOutWords />
      <GoTop />
    </>
  );
}
