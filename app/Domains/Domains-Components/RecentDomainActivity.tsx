type RecentDomainActivity = {
  data: {
    domainActivity: {
      id: number;
      message: string;
      time: string;
    }[];
  };
};
export default function RecentDomainActivity({ data }: RecentDomainActivity) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8 mb-8">
      <h2 className="text-xl font-semibold mb-5">Recent Domain Activity</h2>
      {data.domainActivity.map((activity) => (
        <div
          key={activity.id}
          className="flex items-start gap-3 py-4 border-b last:border-none"
        >
          <div className="w-3 h-3 rounded-full bg-green-500 mt-2"></div>
          <div className="flex-1">
            <p className="font-medium">{activity.message}</p>
            <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
