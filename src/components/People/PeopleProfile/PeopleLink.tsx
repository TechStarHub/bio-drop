import Link from "next/link";
import CopyBtn from "./CopyBtn";

type PeopleLinkProps = {
  label: string;
  url: string;
  type: string;
  key: number;
};

async function IconImporter(type: string) {
  switch (type) {
    case "twitter":
      return import("react-icons/fa6").then((module) => module.FaTwitter);
    case "github":
      return import("react-icons/fa6").then((module) => module.FaGithub);
    case "linkedin":
      return import("react-icons/fa6").then((module) => module.FaLinkedin);
    case "instagram":
      return import("react-icons/fa6").then((module) => module.FaInstagram);
    case "facebook":
      return import("react-icons/fa6").then((module) => module.FaFacebook);
    case "youtube":
      return import("react-icons/fa6").then((module) => module.FaYoutube);
    default:
      return import("react-icons/fa6").then((module) => module.FaLink);
  }
}

export default async function PeopleLink({
  label,
  url,
  type,
  key,
}: PeopleLinkProps) {
  const Icon = await IconImporter(type);
  return (
    <div className="w-full flex justify-between items-center gap-4 px-4 py-2 rounded-full bg-slate-200 hover:border hover:border-sky-600 transition-all duration-400">
      <span className="flex items-center gap-4">
        <Icon className="text-xl" />
        <Link key={key} href={url} className="hover:text-sky-600">
          <h1 className="text-sm font-medium">{label}</h1>
        </Link>
      </span>

      <CopyBtn toBeCopied={url} />
    </div>
  );
}
