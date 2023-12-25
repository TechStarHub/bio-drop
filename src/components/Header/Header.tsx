import Link from "next/link";
import NavBar from "./NabBar";
import { BsGithub } from "react-icons/bs";
import BrandLogo from "../Brand/BrandLogo";

export default function Header() {
  return (
    <header className="px-6 py-2 flex justify-between items-center h-16 ">
      <Link href="/">
        <BrandLogo />
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
