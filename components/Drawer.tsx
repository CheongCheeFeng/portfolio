import { FC } from "react";

interface DrawerProps {
  children: React.ReactNode;
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
}

export const Drawer: FC<DrawerProps> = ({ children, toggle, setToggle }) => {
  return (
    <main
      className={
        " fixed overflow-hidden z-50 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out h-screen" +
        (toggle
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-[70%] right-0 absolute bg-zinc-900 bg-menu-background bg-cover h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  flex-col flex " +
          (toggle ? " translate-x-0 " : " translate-x-full ")
        }
      >
        {children}
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setToggle(false);
        }}
      ></section>
    </main>
  );
};
