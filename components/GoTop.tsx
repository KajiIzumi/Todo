import Link from "next/link";

export function GoTop() {
  return (
    <>
      <Link href="/">
        <div className="p-10 text-xl bg-gray-500">Go Top</div>
      </Link>
    </>
  );
}
