import Link from "next/link";

export default function Index() {
  return (
    <div className="min-w-[170px] hidden sm:block px-3 py-2">
      <h3 className="text-md font-bold mb-4 ">On this page</h3>
      <ul className="flex flex-col gap-2 font-medium text-sm ">
        <li className="hover:text-slate-600">
          <Link href="#step-1" className="">
            Fork the repo
          </Link>
        </li>
        <li className="hover:text-slate-600">
          <Link href="#step-2" className="">
            Clone the repo
          </Link>
        </li>
        <li className="hover:text-slate-600">
          <Link href="#step-3" className="">
            Install the dependencies
          </Link>
        </li>
        <li className="hover:text-slate-600">
          <Link href="#step-4" className="">
            Enter your Bio
          </Link>
        </li>
      </ul>
    </div>
  );
}
