import { AiFillEye } from "react-icons/ai";

export const Project = () => {
  const projects = [
    {
      title: "TryAngle",
      url: "https://play.google.com/store/apps/details?id=com.Butter_Soft.TryAngle_Test",
      category: "Mobile Game",
      image: "/images/projects/tryangle.png",
    },
    {
      title: "Monash Tutor Allocation System",
      url: "http://monash-tas.herokuapp.com/",
      category: "Web App",
      image: "/images/projects/tas.png",
    },
    {
      title: "ReportCare App by GreenSHeart",
      url: "https://greensheart.com/",
      category: "Mobile App",
      image: "/images/projects/greensheart.png",
    },
    {
      title: "Actions Regenerate Automator",
      category: "Mobile App",
      url: "https://gitlab.com/cheefengcheong/accessibilityservice",
    },
    {
      title: "My Portfolio Website",
      category: "Web App",
      url: "https://cheefengcheong.com/",
    },
  ];

  return (
    <div className="relative pb-[50px] bg-black flex-1 justify-center items-center">
      <div className="max-w-md sm:max-w-xl  md:max-w-3xl lg:md:max-w-4xl xl:max-w-full xl:mx-[16rem] mx-auto">
        <div className="text-center py-[60px] px-[50px]">
          <h2 className="text-5xl font-bold">Projects</h2>
          <p className="text-[#B8B8B8] text-lg mt-3 mb-16">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {projects.map((project, index) => (
            <div
              className="w-[270px] flex-col m-8 p-4 rounded-lg bg-white text-black cursor-pointer hover:scale-105 transition duration-300 flex justify-center items-center"
              key={index}
            >
              <div className="w-full h-[230px] relative flex justify-center items-center">
                <img
                  className="w-full h-full rounded-lg object-cover"
                  src={project.image}
                  alt={project.title}
                />

                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full rounded-lg hover:bg-black hover:bg-opacity-50 transition duration-100 ease-in-out flex justify-center items-center group">
                  <a href={project.url} target="_blank" rel="noreferrer">
                    <div className="w-[40px] h-[40px] bg-black bg-opacity-50 opacity-0 rounded-full flex justify-center items-center group-hover:opacity-100 transition ease-in duration-300  group-hover:transtion hover:scale-125">
                      <AiFillEye className="" size={24} color={"white"} />
                    </div>
                  </a>
                </div>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};