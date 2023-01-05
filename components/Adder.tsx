import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useState } from "react";

// const inter = Inter({ subsets: ["latin"] });

export function Adder() {
  const [cnt, setCnt] = useState(0);

  const handleClick = () => {
    setCnt((cnt) => cnt + 1);
  };

  return (
    <>
      <div className="text-center">{cnt}</div>
      <button onClick={handleClick}>addButton</button>
    </>
  );
}
