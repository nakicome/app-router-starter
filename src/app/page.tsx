import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Top Page</h1>
      <div>
        <Link href='/link'>Go to link</Link>
      </div>
    </div>
  );
}
