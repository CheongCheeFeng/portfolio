import { ProjectCard, IProject } from "../components";

export const Projects = () => {
  const projects: IProject[] = [
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
    <div
      className="relative pb-[50px] bg-black bg-project-bg bg-cover flex-1 justify-center items-center"
      id="projects"
    >
      <div className="max-w-md sm:max-w-xl  md:max-w-3xl lg:md:max-w-4xl xl:max-w-full xl:mx-[16rem] mx-auto">
        <div className="text-center py-[70px] px-[50px]">
          <h2 className="text-5xl font-bold">Projects</h2>
          <p className="text-[#B8B8B8] text-lg mt-3 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {projects.map((item, index) => (
            <ProjectCard project={item} key={`project-${item}-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};
