import Link from "next/link";
import NavBar from "./NabBar";
import { BsGithub } from "react-icons/bs";

export default function Header() {
  return (
    <header className="px-6 py-2 flex justify-between items-center h-16 ">
      <Link href="/">
        <span className="text-2xl font-bold first-letter:text-sky-800">
          BioDrop
        </span>
      </Link>
      <NavBar />
      <div className="">
        <Link href="https://github.com/TechStarHub/bio-drop" className="">
          <BsGithub className="text-2xl" />
        </Link>
      </div>
    </header>
  );
}
