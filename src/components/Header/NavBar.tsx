import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="hidden sm:flex gap-3 ">
      <Link href="/">
        <span className="text-md font-medium">Home</span>
      </Link>
      <Link href="/people">
        <span className="text-md font-medium">People</span>
      </Link>
      <Link href="/docs/quick-start">
        <span className="text-md font-medium">Docs</span>
      </Link>
    </nav>
  );
}
