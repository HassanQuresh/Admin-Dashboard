type SearchRowProps = {
  sortValue: string;
  inputValue: string;
  statusValue: string;
  setSortValue: (value: string) => void;
  setInputValue: (value: string) => void;
  setStatusValue: (value: string) => void;
};
export default function SearchRow({
  sortValue,
  inputValue,
  statusValue,
  setSortValue,
  setInputValue,
  setStatusValue,
}: SearchRowProps) {
  return (
    <div className="flex flex-wrap gap-4 mt-8 bg-white rounded-xl shadow-md p-5 items-end">
      <div className="flex flex-col flex-1 min-w-64">
        <label className="text-sm text-gray-500 mb-1">Search</label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search by domain name..."
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm text-gray-500 mb-1">Status</label>
        <select
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
        <label className="text-sm text-gray-500 mb-1">Sort by</label>
        <select
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
