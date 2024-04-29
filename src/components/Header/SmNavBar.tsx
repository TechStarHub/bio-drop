"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export default function SmNavBar() {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  // Close the nav bar when the user clicks on a link
  const closeNav = (url: string) => {
    if (pathname === url) return;
    setShowMenu(false);
  };

  return (
    <div className="relative block sm:hidden">
      <span className="">
        <button
          type="button"
          className="mt-1 border rounded-md border-gray-300 "
          onClick={() => setShowMenu((prev) => !prev)}
        >
          {showMenu ? (
            <IoClose className="text-4xl" />
          ) : (
            <IoMenu className="text-4xl" />
          )}
        </button>
      </span>
      <nav
        className="w-screen flex flex-col items-center gap-3 absolute top-11 -left-6 bg-white p-4 rounded-md shadow-md z-50"
        style={{ display: showMenu ? "flex" : "none" }}
      >
        <Link href="/" onClick={() => closeNav("/")}>
          <span className="text-md font-medium">Home</span>
        </Link>
        <Link href="/people" onClick={() => closeNav("/people")}>
          <span className="text-md font-medium">People</span>
        </Link>
        <Link
          href="/docs/quick-start"
          onClick={() => closeNav("/docs/quick-start")}
        >
          <span className="text-md font-medium">Docs</span>
        </Link>
      </nav>
    </div>
  );
}
