import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaRedditAlien,
  FaTiktok,
  FaSnapchat,
  FaDiscord,
  FaLink,
} from "react-icons/fa6";

export function pathToUsername(path: string): string {
  const pathArr = path.split("/");
  const username = pathArr[pathArr.length - 1];
  return username;
}

export async function IconImporter(type: string) {
  switch (type) {
    case "twitter":
      return FaTwitter;
    case "github":
      return FaGithub;
    case "linkedin":
      return FaLinkedin;
    case "instagram":
      return FaInstagram;
    case "facebook":
      return FaFacebook;
    case "youtube":
      return FaYoutube;
    case "reddit":
      return FaRedditAlien;
    case "tiktok":
      return FaTiktok;
    case "snapchat":
      return FaSnapchat;
    case "discord":
      return FaDiscord;
    default:
      return FaLink;
  }
}
