type SearchRowProps = {
  sortValue: string;
  inputValue: string;
  statusValue: string;
  environmentValue: string;
  setSortValue: (value: string) => void;
  setInputValue: (value: string) => void;
  setStatusValue: (value: string) => void;
  setEnvironmentValue: (value: string) => void;
};
export default function SearchRow({
  sortValue,
  inputValue,
  statusValue,
  environmentValue,
  setSortValue,
  setInputValue,
  setStatusValue,
  setEnvironmentValue,
}: SearchRowProps) {
  return (
    <div className="flex flex-wrap gap-4 mt-8 bg-white p-5 rounded-xl shadow-md items-end">
      <div className="flex flex-col flex-1 min-w-64">
        <label className="text-sm text-gray-500 mb-1">Search Deployments</label>
        <input
          type="text"
          placeholder="Search deployments..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="status" className="text-sm text-gray-500 mb-1">
          {" "}
          Status{" "}
        </label>
        <select
          className="border border-gray-300 rounded-lg px-4 py-2"
          id="status"
          value={statusValue}
          onChange={(e) => setStatusValue(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Building">Building</option>
          <option value="Failed">Failed</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="Environment" className="text-sm text-gray-500 mb-1">
          Environment
        </label>

        <select
          className="border border-gray-300 rounded-lg px-4 py-2"
          id="Environment"
          value={environmentValue}
          onChange={(e) => setEnvironmentValue(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Production">Production</option>
          <option value="Preview">Preview</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="Sort" className="text-sm text-gray-500 mb-1">
          Sort
        </label>
        <select
          id="Sort"
          className="border border-gray-300 rounded-lg px-4 py-2"
          value={sortValue}
          onChange={(e) => setSortValue(e.target.value)}
        >
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
    </div>
  );
}
