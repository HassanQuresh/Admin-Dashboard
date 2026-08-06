type DNSRecordsProps = {
  data: {
    dnsRecords: {
      type: string;
      name: string;
      value: string;
    }[];
  };
};
export default function DNSRecords({ data }: DNSRecordsProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-5">DNS Records</h2>
      <div className="grid grid-cols-3 font-semibold text-gray-600 border-b pb-3">
        <div>Type</div>
        <div>Name</div>
        <div>Value</div>
      </div>
      {data.dnsRecords.map((record) => (
        <div
          key={`${record.type}-${record.name}`}
          className="grid grid-cols-3 py-3 border-b last:border-none"
        >
          <div>{record.type}</div>
          <div>{record.name}</div>
          <div className="truncate">{record.value}</div>
        </div>
      ))}
    </div>
  );
}
