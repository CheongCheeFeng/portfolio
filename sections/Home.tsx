import { useEffect, useState } from "react";

export const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const toRotate = ["Fresh Graduate", "Software Engineer"];
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
    <div className="w-screen h-screen bg-banner bg-cover pt-[230px] pb-[70px] px-16 sm:px-[6rem] lg:px-[10rem] xl:px-[17rem] md:flex">
      <div className="lg:w-5/6 xl:w-[75%]">
        <span className="font-bold py-2 px-[10px] text-lg sm:text-xl border border-white border-opacity-50 tracking-wider bg-gradient1 mb-4 inline-block">
          Welcome to my Portfolio
        </span>
        <h1 className="sm:mb-2 font-mono text-3xl lg:text-5xl text-gray-100">
          {`Hi! I'm Chee Feng`}{" "}
          <span className="animate-wave inline-block">👋</span>
        </h1>

        <span
          className="font-mono text-3xl lg:text-5xl text-gray-100"
          data-period="1000"
          data-rotate='[ "Fresh Graduate", "Software Engineer", ]'
        >
          <span className="flex-wrap">{text}</span>
          <span className="box-border inline-block w-1 h-12 -mb-2 bg-gray-500 opacity-75 animate-cursor"></span>
        </span>
        <div className="text-xl lg:text-2xl py-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, eius
          dignissimos ullam quis fugiat delectus necessitatibus ab. Odio eius
          voluptatum, excepturi nam eaque, praesentium nobis doloribus placeat
          ducimus minima nihil.
        </div>
        <div>Lets</div>
      </div>
      <div className=" absolute bottom-0 right-12 md:right-20 lg:right-32 xl:static xl:flex xl:flex-end">
        <img
          className="animate-updown w-[350px] h-[100] md:w-[400px]  xl:w-[600px]"
          src={"/me.svg"}
          alt={"my drawing"}
        />
      </div>
      {/* <Image
        className="animate-updown"
        src={"/me.svg"}
        alt={"my drawing"}
        width={"600px"}
        height={"600px"}
        // layout={"responsive"}
      /> */}
    </div>
  );
};
