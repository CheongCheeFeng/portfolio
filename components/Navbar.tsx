import Image from "next/image";
import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { Drawer } from "./Drawer";
import Link from "next/link";

export const Navbar = ({
  activeNav,
  setActiveNav,
}: {
  activeNav: string;
  setActiveNav: React.Dispatch<string>;
}) => {
  const navItems = ["home", "skills", "projects", "contact"];
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolled]);

  return (
    <nav
      className={`w-full flex justify-between items-center py-2 fixed z-[2] px-16 sm:px-[6rem] lg:px-[10rem] xl:px-[17rem] ${
        scrolled ? "bg-[#0F0F0F]" : "bg-transparent"
      }`}
    >
      <div className="flex justify-start items-center">
        <Image
          src={"/images/logo.svg"}
          alt="logo"
          layout="fixed"
          width={56}
          height={56}
        />
      </div>
      <ul className="hidden sm:flex flex-1  justify-center items-center">
        {navItems.map((item, index) => (
          <li
            className="flex items-center justify-center mx-4 cursor-pointer flex-col group"
            key={`link-${item}-${index}`}
            onClick={() => setActiveNav(`#${item}`)}
          >
            <div
              className={`w-2 h-2 bg-white rounded-half justify-start  group-hover:opacity-100 ${
                activeNav === "#" + item ? "opacity-100" : "opacity-0"
              }`}
            />
            <Link href={`/#${item}`}>
              <a
                className={`text-white no-underline uppercase font-medium text-lg
              transision-all duration-200 ease-in-out group-hover:opacity-100 
              ${activeNav === "#" + item ? "opacity-100" : "opacity-75"}`}
              >
                {item}
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden w-9 h-9 flex justify-center items-center">
        <HiMenu
          className="cursor-pointer"
          size={28}
          color="white"
          onClick={() => setToggle(true)}
        />
        <Drawer toggle={toggle} setToggle={setToggle}>
          <ul className="flex flex-col mt-16 mx-10">
            {navItems.map((item, index) => (
              <li
                className="flex items-start justify-start my-5"
                key={`link-${item}-${index}`}
              >
                <Link href={`/#${item}`}>
                  <a
                    className="text-white no-underline uppercase font-medium text-lg"
                    href={`/#${item}`}
                    onClick={() => setToggle(false)}
                  >
                    {item}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </Drawer>
      </div>
    </nav>
  );
};
