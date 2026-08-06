type ProjectsContainerProps = {
  filteredProjects: {
    id: number;
    name: string;
    framework: string;
    status: string;
    lastDeployment: string;
  }[];
  setInputValue: (value: string) => void;
  setStatusValue: (value: string) => void;
  setFrameworkValue: (value: string) => void;
  setSortValue: (value: string) => void;
};
import StatusBadge from "@/app/components/StatusBadge";
export default function ProjectsContainer({
  filteredProjects,
  setInputValue,
  setFrameworkValue,
  setStatusValue,
  setSortValue,
}: ProjectsContainerProps) {
  return (
    <div className="Projects mt-8 bg-white rounded-xl shadow-md overflow-hidden">
      <div className="grid grid-cols-5 bg-gray-200 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-gray-600">
        <div>Project</div>
        <div>Framework</div>
        <div>Status</div>
        <div>Last Deploy</div>
        <div>Actions</div>
      </div>
      {filteredProjects.length > 0
        ? filteredProjects.map((project) => (
            <div
              key={project.id}
              className="grid grid-cols-5 items-center px-6 py-5 border-b border-gray-200 hover:bg-gray-50 transition last:border-none"
            >
              <div className="font-semibold text-gray-800">{project.name}</div>
              <div className="text-gray-600">{project.framework}</div>
              <div>
                <StatusBadge projectStatus={project.status} />
              </div>
              <div className="text-gray-500 text-sm">
                {project.lastDeployment}
              </div>
              <div className="flex gap-4 text-sm">
                <button className="text-blue-600 hover:underline cursor-pointer">
                  View
                </button>
                <button className="text-green-600 hover:underline cursor-pointer">
                  Deploy
                </button>
                <button className="text-gray-500 hover:text-black cursor-pointer">
                  ⋮
                </button>
              </div>
            </div>
          ))
        : filteredProjects.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16">
              <h2 className="text-2xl font-bold text-gray-800">
                No Projects Found
              </h2>
              <p className="mt-2 text-gray-500">
                Try changing your search or filters.
              </p>
              <button
                onClick={() => {
                  setInputValue("");
                  setSortValue("A-Z");
                  setStatusValue("All");
                  setFrameworkValue("All");
                }}
                className="mt-6 rounded-lg bg-black px-5 py-2 text-white hover:bg-gray-800 transition cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          )}
    </div>
  );
}
