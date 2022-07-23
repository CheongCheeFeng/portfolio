import Image from "next/image";
import { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { Drawer } from "./Drawer";

export const Navbar = () => {
  const navItems = ["home", "about", "work", "skills", "contact"];

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
    console.log(scrolled);
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
          src={"/logo.svg"}
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
          >
            <div className="w-2 h-2 bg-white rounded-half justify-start opacity-0 group-hover:opacity-100" />
            <a
              className="text-white no-underline uppercase font-medium text-lg
              transision-all duration-200 ease-in-out opacity-75 group-hover:opacity-100"
              href={`#${item}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden rounded-half bg-white w-9 h-9 flex justify-center items-center">
        <HiMenuAlt4 size={28} color="black" onClick={() => setToggle(true)} />
        <Drawer toggle={toggle} setToggle={setToggle}>
          <ul className="flex flex-col mt-16 mx-10">
            {navItems.map((item, index) => (
              <li
                className="flex items-start justify-start my-5"
                key={`link-${item}-${index}`}
              >
                <a
                  className="text-white no-underline uppercase font-medium text-lg"
                  href={`/#${item}`}
                  onClick={() => setToggle(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </Drawer>
      </div>
    </nav>
  );
};
