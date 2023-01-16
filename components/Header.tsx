import Head from "next/head";

export default function Header(props: { stepNum: string; title: string }) {
  return (
    <>
      <Head>
        <title>{`Step${props.stepNum}`}</title>
      </Head>
      <h1 className="text-center">
        <div className="text-2xl p-5">Step{props.stepNum}</div>
        <div className="text-3xl">{props.title}</div>
      </h1>
    </>
  );
}
