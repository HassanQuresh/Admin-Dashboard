type StatCardProps = {
  title: string;
  value: string | number;
};
export default function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between min-h-36 hover:shadow-lg transition">
      <p className="text-gray-500 text-sm font-medium">{title}</p>
      <p className="text-4xl font-bold mt-4">{value}</p>
    </div>
  );
};