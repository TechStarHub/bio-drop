import Link from "next/link";
import Dropdown from "./Dropdown";

export default function SideBar() {
  const getStartedLinks = [
    {
      label: "Initial Setups",
      url: "/docs/get-started",
      type: "twitter",
      key: 1,
    },
    {
      label: "Enter your Bio",
      url: "/docs/get-started",
      type: "twitter",
      key: 1,
    },
    {
      label: "JSON Syntax",
      url: "/docs/get-started",
      type: "twitter",
      key: 1,
    },
  ];
  return (
    <aside className="w-[180px] text-center px-1">
      <h3 className="text-xl font-medium my-2">Documentation</h3>
      <ul className="flex flex-col justify-center items-center ">
        <li className="">
          <Dropdown label="Quick Start" type="link" url="/docs/quick-start" />
        </li>
        <li className="">
          <Dropdown
            label="Get Started"
            type="dropdown"
            links={getStartedLinks}
          />
        </li>
      </ul>
    </aside>
  );
}
