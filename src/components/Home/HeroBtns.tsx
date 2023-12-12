"use client";
import { FaAngleRight } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function HeroBtns() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center mt-6">
      <button
        onClick={() => router.push("/docs/quick-start")}
        className="flex justify-center items-center bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-full"
      >
        <span className="mr-2">Get Started</span>
        <FaAngleRight />
      </button>
      <button
        onClick={() => router.push("/people")}
        className="flex justify-center items-center bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full ml-4"
      >
        <span className="mr-2">View People</span>
        <BsPeopleFill />
      </button>
    </div>
  );
}
