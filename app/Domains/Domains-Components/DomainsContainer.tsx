type DomainsContainerProps = {
  filteredDomains: {
    id: number;
    domain: string;
    project: string;
    status: string;
    ssl: string;
    updated: string;
  }[];
  setSortValue: (value: string) => void;
  setInputValue: (value: string) => void;
  setStatusValue: (value: string) => void;
};
import StatusBadge from "@/app/components/StatusBadge";
export default function DomainsContainer({
  filteredDomains,
  setSortValue,
  setInputValue,
  setStatusValue,
}: DomainsContainerProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Domains</h2>
        <button className="text-2xl text-gray-500 hover:text-black">⋮</button>
      </div>
      <div className="grid grid-cols-6 font-semibold text-gray-600 border-b pb-3">
        <div>Domain</div>
        <div>Project</div>
        <div>Status</div>
        <div>SSL</div>
        <div>Updated</div>
        <div>Actions</div>
      </div>
      {filteredDomains.length > 0
        ? filteredDomains.map((domain) => (
            <div
              key={domain.id}
              className="grid grid-cols-6 items-center py-4 border-b last:border-none"
            >
              <div className="font-medium">{domain.domain}</div>
              <div>{domain.project}</div>
              <div>
                <StatusBadge projectStatus={domain.status} />
              </div>
              <div>
                <StatusBadge projectStatus={domain.ssl} />
              </div>
              <div className="text-gray-500">{domain.updated}</div>
              <button className="text-xl text-gray-500 hover:text-black">
                ⋮
              </button>
            </div>
          ))
        : filteredDomains.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16">
              <h2 className="text-2xl font-bold text-gray-800">
                No Domains Found
              </h2>
              <p className="mt-2 text-gray-500">
                Try changing your search or filters.
              </p>
              <button
                onClick={() => {
                  setInputValue("");
                  setSortValue("A-Z");
                  setStatusValue("All");
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
