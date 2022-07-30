import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  const navItems = ["home", "skills", "projects", "contact"];
  const socials = [
    {
      name: "Github",
      icon: <FaGithub className="h-7 w-7" />,
      url: "https://github.com/CheongCheeFeng",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="h-7 w-7" />,
      url: "https://www.linkedin.com/in/cheefengcheong/",
    },
  ];
  return (
    <section className="bg-footer">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2" id="">
          {navItems.map((item, index) => (
            <div className="px-5 py-2" key={`footer-${item}-${index}`}>
              <a
                href="#"
                className="text-base leading-6 text-gray-400 hover:text-white capitalize"
              >
                {item}
              </a>
            </div>
          ))}
        </nav>
        <div className="flex justify-center mt-8 space-x-6" id="">
          {socials.map((item, index) => (
            <a
              key={`socials-${item}-${index}`}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </a>
          ))}
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2022 Cheong Chee Feng. All rights reserved.
        </p>
      </div>
    </section>
  );
};
