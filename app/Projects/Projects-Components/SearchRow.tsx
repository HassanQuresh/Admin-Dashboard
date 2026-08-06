type SearchRowProps = {
  inputValue: string;
  statusValue: string;
  frameworkValue: string;
  sortValue: string;
  setInputValue: (value: string) => void;
  setStatusValue: (value: string) => void;
  setFrameworkValue: (value: string) => void;
  setSortValue: (value: string) => void;
};
export default function SearchRow({
  inputValue,
  statusValue,
  frameworkValue,
  sortValue,
  setInputValue,
  setStatusValue,
  setFrameworkValue,
  setSortValue,
}: SearchRowProps) {
  return (
    <div className="search-row flex flex-wrap gap-4 mt-8 bg-white p-5 rounded-xl shadow-md items-end">
      <div className="flex flex-col flex-1 min-w-62.5">
        <label className="text-sm text-gray-500 mb-1">Search Projects</label>
        <input
          type="text"
          placeholder="Search projects..."
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="status" className="text-sm text-gray-500 mb-1">
          Status
        </label>
        <select
          id="status"
          className="border border-gray-300 rounded-lg px-4 py-2"
          value={statusValue}
          onChange={(e) => setStatusValue(e.target.value)}
        >
          <option>All</option>
          <option>Active</option>
          <option>Building</option>
          <option>Failed</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="framework" className="text-sm text-gray-500 mb-1">
          Framework
        </label>
        <select
          id="framework"
          className="border border-gray-300 rounded-lg px-4 py-2"
          value={frameworkValue}
          onChange={(e) => setFrameworkValue(e.target.value)}
        >
          <option>All</option>
          <option>Next.js</option>
          <option>React</option>
          <option>Vue</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="sort" className="text-sm text-gray-500 mb-1">
          Sort
        </label>
        <select
          id="sort"
          className="border border-gray-300 rounded-lg px-4 py-2"
          value={sortValue}
          onChange={(e) => setSortValue(e.target.value)}
        >
          <option>A-Z</option>
          <option>Z-A</option>
        </select>
      </div>
    </div>
  );
}
