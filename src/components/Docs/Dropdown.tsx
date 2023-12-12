"use client";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

type Link = {
  label: string;
  url: string;
  key: number;
};

type DropdownProps = {
  links?: Link[];
  label: string;
  type: string;
  url?: string;
};

export default function Dropdown({ links, label, type, url }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  if (type === "link" && url)
    return (
      <div className=" ">
        <Link href={url}>
          <span className="flex items-center gap-3 transition-all duration-200 hover:bg-slate-200 w-full px-4 py-2 rounded cursor-pointer">
            <h1 className="text-md font-medium">{label}</h1>
            <FaChevronRight className="text-md" />
          </span>
        </Link>
      </div>
    );
  else if (type === "link" && !url) {
    return <span className="">Check your dropdown props</span>;
  }
  return (
    <div className=" ">
      <span
        onClick={toggle}
        className="flex items-center gap-3 transition-all duration-200 hover:bg-slate-200 w-full px-4 py-2 rounded cursor-pointer"
      >
        <h1 className="text-md font-medium">{label}</h1>
        {!isOpen ? (
          <FaChevronRight className="text-md" />
        ) : (
          <FaChevronDown className="text-md" />
        )}
      </span>
      {isOpen && (
        <ul className="flex flex-col ">
          {links &&
            links.map((link: Link, idx: number) => (
              <li key={idx}>
                <Link href={link.url} className=" ">
                  <span className="flex transition-all duration-200 hover:bg-slate-200 w-full px-4 py-2 rounded cursor-pointer">
                    <h1 className="text-sm text-slate-700 font-medium">
                      {link.label}
                    </h1>
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
