import Link from "next/link";
import CopyBtn from "../CopyBtn/CopyBtn";
import { IconImporter } from "@/utils";

type PeopleLinkProps = {
  label: string;
  url: string;
  type: string;
  key: number;
};

export default async function PeopleLink({
  label,
  url,
  type,
  key,
}: PeopleLinkProps) {
  const Icon = await IconImporter(type.toLowerCase());
  return (
    <div className="w-full flex justify-between items-center gap-4 px-4 py-2 rounded-full bg-slate-200 border-2 hover:border-sky-600 transition-all duration-400 sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] 2xl:w-[1100px] max-w-[1200px]">
      <span className="flex items-center gap-4 w-full">
        <Icon className="text-xl" />
        <Link key={key} href={url} className="hover:text-sky-600">
          <h1 className="text-sm font-medium">{label}</h1>
        </Link>
      </span>

      <CopyBtn toBeCopied={url} />
    </div>
  );
}
