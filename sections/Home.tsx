import { useEffect, useState } from "react";
import { FiArrowRightCircle } from "react-icons/fi";

export const Home = ({
  setActiveNav,
}: {
  setActiveNav: React.Dispatch<string>;
}) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const toRotate = ["Freelancer", "Software Engineer"];
    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };

    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta, loopNum, isDeleting, text]);

  return (
    <div
      className="w-auto h-screen bg-banner bg-cover pt-[80px] xl:pt-[230px] sm:pb-[70px] px-2 sm:px-[6rem] lg:px-[10rem] xl:px-[17rem] md:flex"
      id="home"
    >
      <div className="lg:w-4/6 xl:w-[95%]">
        <span className="font-bold py-2 px-[10px] text-lg sm:text-xl border border-white border-opacity-50 tracking-wider bg-gradient1 mb-4 inline-block">
          Welcome to my Portfolio
        </span>
        <h1 className="font-mono text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-100">
          {`Hi! I'm Chee Feng`}{" "}
          <div className="animate-wave inline-block">👋</div>
        </h1>

        <span
          className="font-mono text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-100"
          data-period="1000"
          data-rotate='[ "Freelancer", "Software Engineer", ]'
        >
          <span className="flex-wrap">{text}</span>
          <span className="box-border inline-block w-1 h-12 -mb-2 bg-gray-500 opacity-75 animate-cursor"></span>
        </span>
        <div className="text-xl lg:text-2xl py-4">
          I am a fresh graduate from Monash University Malaysia with Bachelor's
          Degree in Software Engineering. I am experience with frontend
          development using frontend framework such as React. I also have a
          strong background on data structures, algorithms and etc.
        </div>
        <a
          className="flex justify-left items-center text-xl font-bold my-4 group"
          href="https://drive.google.com/drive/folders/1DhVZtFr2UUp16zlKZtkn3CmwnQE4LB5U?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Check my resume{" "}
          <FiArrowRightCircle
            className="ml-3 group-hover:transition group-hover:ease-in-out group-hover:duration-300 group-hover:ml-6"
            size={25}
          />
        </a>
        <a
          className="flex justify-left items-center text-xl font-bold group cursor-pointer"
          href="#contact"
          onClick={() => setActiveNav("#contact")}
        >
          Let’s Connect{" "}
          <FiArrowRightCircle
            className="ml-3 group-hover:transition group-hover:ease-in-out group-hover:duration-300 group-hover:ml-6"
            size={25}
          />
        </a>
      </div>
      <div className=" absolute -bottom-6 right-12 w-2/3 h-auto ml-auto xl:static xl:flex xl:ml-auto">
        <img
          className="animate-updown w-full h-auto  ml-auto  sm:w-[350px] sm:h-[100] md:w-[400px]  xl:w-[600px]"
          src={"/images/me.svg"}
          alt={"my drawing"}
        />
      </div>
    </div>
  );
};
