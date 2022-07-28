export const Project = () => {
  const projects = [
    {
      title: "TryAngle",
      url: "https://play.google.com/store/apps/details?id=com.Butter_Soft.TryAngle_Test",
      category: "Mobile Game",
      image: "/images/projects/tryangle.png",
      techstack: ["unity", "c#"],
    },
    {
      title: "Monash Tutor Allocation System",
      url: "http://monash-tas.herokuapp.com/",
      category: "Web App",
      image: "/images/projects/tas.png",
      techstack: ["react", "docker", "express"],
    },
    {
      title: "ReportCare App by GreenSHeart",
      url: "https://greensheart.com/",
      category: "Mobile App",
      image: "/images/projects/greensheart.png",
      techstack: ["react-native", "aws", "graphql"],
    },
    {
      title: "Actions Regenerate Automator",
      category: "Mobile App",
      url: "https://gitlab.com/cheefengcheong/accessibilityservice",
      image: "/images/projects/accessibilityservice.png",
      techstack: ["android", "flask", "redis"],
    },
    {
      title: "My Portfolio Website",
      category: "Web App",
      url: "",
      image: "/images/projects/portfolio.png",
      techstack: ["next.js", "tailwindcss", "typescript"],
    },
  ];

  return (
    <div className="relative pb-[50px] bg-black flex-1 justify-center items-center">
      <div className="max-w-md sm:max-w-xl  md:max-w-3xl lg:md:max-w-4xl xl:max-w-full xl:mx-[16rem] mx-auto">
        <div className="text-center py-[60px] px-[50px]">
          <h2 className="text-5xl font-bold">Projects</h2>
          <p className="text-[#B8B8B8] text-lg mt-3 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {projects.map((project, index) => (
            <a
              href={project.url}
              key={`project-${project}${index}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className="w-[270px] flex-col m-8 p-4 pb-8 rounded-lg bg-white text-black cursor-pointer hover:scale-105 transition duration-300 flex justify-center items-center">
                <div className="w-full h-[230px] relative flex justify-center items-center">
                  <img
                    className="w-full h-full rounded-lg object-cover"
                    src={project.image}
                    alt={project.title}
                  />
                </div>

                <div className="p-2 w-full relative flex-col flex justify-center items-center">
                  <p
                    className="text-sm text-left text-black font-bold"
                    style={{ marginTop: 10 }}
                  >
                    {project.title}
                  </p>

                  <div className="absolute py-2 px-4 rounded-lg bg-white -top-[26px] flex justify-center items-center">
                    <p className="text-sm text-left text-zinc-500 font-bold">
                      {project.category}
                    </p>
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  {project.techstack.map((tech, index) => (
                    <div
                      key={`tag-${tech}${index}`}
                      className="mx-1 text-xs inline-block font-bold px-2 py-[2px] rounded-lg bg-[#e2e8f0] text-gray-800  border-zinc-400"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
