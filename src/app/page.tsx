import HeroBtns from "@/components/Home/HeroBtns";
import { BsGithub } from "react-icons/bs";
import { MdOutlineMoneyOff } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-start min-h-[90vh] p-2 my-10 sm:mt-0">
        <Image
          quality={100}
          src="/bio-drop.png"
          alt="Hero Image"
          width={300}
          height={300}
          className="-mt-4"
        />
        <h1 className="text-6xl font-bold -mt-4">BioDrop</h1>
        <p className="mt-3 text-2xl text-center">
          A simple app for sharing your bio links
        </p>
        <div className="flex gap-2 mt-4 font-medium w-full justify-center">
          <span className="flex gap-2 items-center">
            <BsGithub className="text-xl" />
            <span className="">Open Source</span>
          </span>
          |
          <span className="flex gap-2 items-center">
            <MdOutlineMoneyOff className="text-xl " />
            <span className="">
              Free <span className="hidden sm:inline-block">forever</span>
            </span>
          </span>
          |
          <span className="flex gap-2 items-center">
            <MdSecurity className="text-xl " />
            <span className="">
              No Signup <span className="hidden sm:inline-block">required</span>
            </span>
          </span>
        </div>
        <HeroBtns />
      </section>
    </>
  );
}
