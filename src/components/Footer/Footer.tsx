import Link from "next/link";
import Image from "next/image";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" px-5 sm:px-6 py-4 bg-gray-100">
      <div className="flex gap-2 justify-between items-center mb-4">
        <div className="sm:w-1/2">
          <Link href="/">
            <span className="text-2xl font-bold">BioDrop</span>
          </Link>
          <p className="text-slate-600 text-sm mt-1 leading-tight tracking-tight">
            A simple, easy-to-use tool to create your own bio link page for
            free.
          </p>
        </div>
        <div className="flex flex-col gap-1 items-center w-full">
          <span className="text-gray-600 text-lg font-medium ">Made with</span>
          <span className="flex gap-3">
            <Image
              src={"/next.svg"}
              width={60}
              height={60}
              alt="Next.js Logo"
            />
            <Image
              className="hidden sm:block"
              src={"/tailwindcss.svg"}
              width={100}
              height={60}
              alt="Vercel Logo"
            />
            <Image
              className="block sm:hidden"
              src={"/tailwindcss-mark.svg"}
              width={30}
              height={30}
              alt="Vercel Logo"
            />
          </span>
        </div>
        <div className="hidden sm:flex flex-col items-center gap-1 w-fit">
          <span className="text-gray-600 text-lg font-medium">Socials</span>
          <span className="flex items-center">
            <Link
              href="https://github.com/TechStarHub"
              target="_blank"
              className="border-r border-slate-400 pr-2"
            >
              <FaGithub className="text-2xl text-slate-600 hover:text-black transition-all duration-300 cursor-pointer" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/techstarhub/"
              className="px-2 border-r border-slate-400"
            >
              <FaLinkedin className="text-2xl text-slate-600 hover:text-sky-600 transition-all duration-300 cursor-pointer" />
            </Link>
            <Link
              href="https://techstarhubweb.netlify.app/"
              target="_blank"
              className="pl-2"
            >
              <FaLink className="text-2xl text-slate-600 hover:text-indigo-700  transition-all duration-300 cursor-pointer" />
            </Link>
          </span>
        </div>
      </div>
      <hr />
      <div className="mt-2">
        <ul className="flex gap-4 sm:gap-2 justify-center sm:justify-start items-center">
          <li className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-all duration-300">
            <Link href="/privacy">Privacy</Link>
          </li>
          <li className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-all duration-300">
            <Link href="/security">Security</Link>
          </li>
          <li className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-all duration-300">
            <Link href="/license">License</Link>
          </li>
          <li className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-all duration-300">
            <Link href="/terms">Terms</Link>
          </li>
        </ul>
        <p className="text-gray-600 text-sm text-center mt-2">
          &copy; 2023 BioDrop. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
