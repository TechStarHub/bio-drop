"use client";
import { LuClipboardCopy } from "react-icons/lu";
import { TiTick } from "react-icons/ti";
import { useState } from "react";
type CopyBtnProps = {
  toBeCopied: string;
};

export default function CopyBtn({ toBeCopied }: CopyBtnProps) {
  const [copied, setCopied] = useState(false);
  const hadleCopy = async () => {
    await navigator.clipboard.writeText(toBeCopied);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <button
      onClick={hadleCopy}
      className={`relative text-lg p-1 rounded transition-all duration-300 ${
        copied ? "hover:bg-green-300/50" : "hover:bg-slate-300"
      }  shadow-sm`}
    >
      {copied ? (
        <TiTick className=" text-green-500" />
      ) : (
        <LuClipboardCopy className="" />
      )}
    </button>
  );
}
