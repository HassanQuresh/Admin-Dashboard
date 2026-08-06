type RecentActivityProps = {
  data: {
    id: number;
    message: string;
    time: string;
  }[];
};
export default function RecentActivity({
  data,
}: RecentActivityProps) {
  return (
    <div className="rounded-xl">
      <div className="space-y-4">
        {data.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-3 border-b border-gray-200 pb-4 last:border-none"
          >
            <div className="w-3 h-3 rounded-full bg-green-500 mt-2"></div>

            <div className="flex-1">
              <p className="font-medium text-gray-800">{activity.message}</p>

              <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
