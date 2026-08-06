type DeploymentsContainerProps = {
  filteredDeployments: {
    id: number;
    project: string;
    environment: string;
    status: string;
    commit: string;
    deployedAt: string;
    duration: string;
  }[];
  setSortValue: (value: string) => void;
  setInputValue: (value: string) => void;
  setStatusValue: (value: string) => void;
  setEnvironmentValue: (value: string) => void;
};
import StatusBadge from "@/app/components/StatusBadge";
export default function DeploymentsContainer({
  filteredDeployments,
  setSortValue,
  setInputValue,
  setStatusValue,
  setEnvironmentValue,
}: DeploymentsContainerProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="grid grid-cols-6 bg-gray-200 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-gray-600">
        <div>Project</div>
        <div>Status</div>
        <div>Environment</div>
        <div>Duration</div>
        <div>Deployed</div>
        <div>Actions</div>
      </div>
      {filteredDeployments.length > 0 ? (
        filteredDeployments.map((deployment) => (
          <div
            key={deployment.id}
            className="grid grid-cols-6 items-center px-6 py-5 border-b border-gray-200 hover:bg-gray-50 transition last:border-none"
          >
            <div className="font-semibold text-gray-800">
              {deployment.project}
            </div>
            <div>
              <StatusBadge projectStatus={deployment.status} />
            </div>
            <div className="text-gray-600">{deployment.environment}</div>
            <div className="text-gray-500 text-sm">{deployment.duration}</div>
            <div className="text-gray-500 text-sm">{deployment.deployedAt}</div>
            <div className="flex gap-4 text-sm">
              <button className="text-blue-600 hover:underline cursor-pointer">
                Logs
              </button>

              <button className="text-green-600 hover:underline cursor-pointer">
                Redeploy
              </button>

              <button className="text-gray-500 hover:text-black cursor-pointer">
                ⋮
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center py-16">
          <h2 className="text-2xl font-bold text-gray-800">
            No Deployment Found
          </h2>
          <p className="mt-2 text-gray-500">
            Try changing your search or filters
          </p>
          <button
            className="mt-6 rounded-lg bg-black px-5 py-2 text-white hover:bg-gray-800 transition cursor-pointer"
            onClick={() => {
              setInputValue("");
              setSortValue("A-Z");
              setStatusValue("All");
              setEnvironmentValue("All");
            }}
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
