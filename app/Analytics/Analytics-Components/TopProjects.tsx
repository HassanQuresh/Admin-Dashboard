type TopProjectsProps = {
  data: {
    name: string;
    visitors: number;
  }[];
};
export default function TopProjects({ data }: TopProjectsProps) {
  return (
    <div className="rounded-xl">
      <div className="space-y-5">
        {data.map((project) => (
          <div key={project.name}>
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-800">{project.name}</span>

              <span className="text-sm text-gray-500">
                {project.visitors.toLocaleString()} visitors
              </span>
            </div>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full"
                style={{
                  width: `${(project.visitors / data[0].visitors) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
