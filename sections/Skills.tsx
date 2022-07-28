export const Skills = () => {
  const skills = ["react", "git", "figma", "android", "redux", "nodejs"];
  const languages = [
    "javascript",
    "typescript",
    "python",
    "java",
    "kotlin",
    "graphql",
  ];
  return (
    <div className="relative pb-[50px] bg-primary flex-1 justify-center items-center">
      <div className="max-w-md sm:max-w-xl  md:max-w-3xl lg:md:max-w-4xl xl:max-w-full xl:mx-[16rem] mx-auto">
        <div className="bg-[#171717] rounded-[64px] text-center py-[60px] px-[50px]">
          <h2 className="text-5xl font-bold">Skills & Languages</h2>
          <p className="text-[#B8B8B8] text-lg mt-3 mb-16">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="flex flex-col 2xl:flex-row justify-center items-center">
            <div className=" flex flex-wrap items-center 2xl:w-1/2 justify-center 2xl:justify-center 2xl:mr-10">
              {skills.map((skill, index) => (
                <div
                  key={`link-${skill}-${index}`}
                  className="w-1/4 m-4 lg:w-1/5"
                >
                  <div className="p-5 bg-white rounded-full">
                    <img
                      src={`/images/techstack/${skill}.png`}
                      alt={skill}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="capitalize font-medium text-lg pt-2">
                    {skill}
                  </div>
                </div>
              ))}
            </div>
            <div className="2xl:hidden bg-zinc-800 w-full h-1 my-10"></div>

            <div className=" flex flex-wrap items-center 2xl:w-1/2 justify-center 2xl:justify-center 2xl:ml-10">
              {languages.map((language, index) => (
                <div
                  key={`link-${language}-${index}`}
                  className="w-1/4 m-4 lg:w-1/5"
                >
                  <div className="p-5 bg-white rounded-full">
                    <img
                      src={`/images/techstack/${language}.png`}
                      alt={language}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="capitalize font-medium text-lg pt-2">
                    {language}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
