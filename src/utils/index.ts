export function pathToUsername(path: string): string {
  const pathArr = path.split("/");
  const username = pathArr[pathArr.length - 1];
  return username;
}

export async function IconImporter(type: string) {
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
    case "reddit":
      return import("react-icons/fa").then((module) => module.FaRedditAlien);
    case "tiktok":
      return import("react-icons/fa6").then((module) => module.FaTiktok);
    case "snapchat":
      return import("react-icons/fa").then((module) => module.FaSnapchatGhost);
    case "discord":
      return import("react-icons/fa6").then((module) => module.FaDiscord);
    default:
      return import("react-icons/fa6").then((module) => module.FaLink);
  }
}
