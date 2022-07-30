interface ProjectCardProps {
  project: IProject;
}

export interface IProject {
  title: string;
  url: string;
  category: string;
  image: string;
  techstack: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a href={project.url} target="_blank" rel="noreferrer">
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
            style={{
              marginTop: 10,
            }}
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
  );
};
