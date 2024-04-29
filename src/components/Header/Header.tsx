import Link from "next/link";
import NavBar from "./NavBar";
import SmNavBar from "./SmNavBar";
import { BsGithub } from "react-icons/bs";
import BrandLogo from "../Brand/BrandLogo";

export default function Header() {
  return (
    <header className="px-6 py-2 flex justify-between items-center h-16 ">
      <div className="flex items-center gap-3">
        <SmNavBar />
        <Link href="/">
          <BrandLogo />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <NavBar />
        <span className="w-[2px] h-8 border hidden sm:block"></span>
        <Link href="https://github.com/TechStarHub/bio-drop" className="">
          <BsGithub className="text-2xl" />
        </Link>
      </div>
    </header>
  );
}
