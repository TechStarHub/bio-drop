import HeroBtns from "@/components/Home/HeroBtns";
import { BsGithub } from "react-icons/bs";
import { MdOutlineMoneyOff } from "react-icons/md";
import { MdSecurity } from "react-icons/md";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold ">BioDrop</h1>
        <p className="mt-3 text-2xl">A simple app for sharing your bio links</p>
        <div className="flex gap-2 mt-4 font-medium">
          <span className="flex gap-2 items-center">
            <BsGithub className="text-xl" />
            Open Source
          </span>
          |
          <span className="flex gap-2 items-center">
            Free Forever
            <MdOutlineMoneyOff className="text-xl " />
          </span>
          |
          <span className="flex gap-2 items-center">
            No Signup Require
            <MdSecurity className="text-xl " />
          </span>
        </div>
        <HeroBtns />
      </section>
    </>
  );
}
