import { FaAngleRight } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import Link from "next/link";

export default function HeroBtns() {
  return (
    <div className="flex justify-center items-center mt-6">
      <Link
        href="/docs/quick-start"
        className="flex justify-center items-center bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-full"
        aria-label="Get Started with BioDrop"
        role="button"
        tabIndex={0}
        prefetch={true}
      >
        <span className="mr-2">Get Started</span>
        <FaAngleRight />
      </Link>
      <Link
        href="/people"
        className="flex justify-center items-center bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full ml-4"
        aria-label="View People using BioDrop"
        role="button"
        tabIndex={0}
        prefetch={true}
      >
        <span className="mr-2">View People</span>
        <BsPeopleFill />
      </Link>
    </div>
  );
}
