interface TechStackProps {
  techstack: string;
}

export const TechStack: React.FC<TechStackProps> = ({ techstack }) => {
  return (
    <div className="w-1/4 m-4 lg:w-1/5">
      <div className="p-5 bg-white rounded-full">
        <img
          src={`/images/techstack/${techstack}.png`}
          alt={techstack}
          className="w-full h-auto"
        />
      </div>
      <div className="capitalize font-medium text-lg pt-2">{techstack}</div>
    </div>
  );
};
