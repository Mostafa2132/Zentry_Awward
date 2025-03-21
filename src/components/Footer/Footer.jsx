import { FaDiscord, FaGithubAlt, FaTwitch, FaTwitter } from "react-icons/fa";

const Links = [
  {
    href: "https://discord.com/invite/zentry",
    icon: <FaDiscord />,
  },
  {
    href: "https://github.com/zentry",
    icon: <FaGithubAlt />,
  },
  {
    href: "https://twitter.com/zentry",
    icon: <FaTwitter />,
  },
  {
    href: "https://www.twitch.tv/zentry",
    icon: <FaTwitch />,
  },
];
export default function Footer() {
  return (
    <footer className="bg-violet-300 w-screen text-black  py-5">
      <div className="container font-semibold  mx-auto flex flex-col items-center justify-between gap-4 px-7 md:flex-row">
        <p className="text-sm text-center md:text-left">
          ©Zentry 2024. All rights reserved
        </p>
        <div className="flex justify-center md:justify-start gap-6 ">
          {Links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-colors duration-500 hover:text-white ease-in-out"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a
          className="text-sm text-center hover:underline md:text-right"
          href="#privacyPolicy"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
