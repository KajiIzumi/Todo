import Link from "next/link";

export function GoTop() {
  return (
    <>
      <Link href="/">
        <div className="text-center p-20 text-xl">Go Top</div>
      </Link>
    </>
  );
}
