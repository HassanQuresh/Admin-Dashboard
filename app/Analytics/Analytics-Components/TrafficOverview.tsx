type TrafficOverviewProps = {
  data: {
    day: string;
    visitors: number;
  }[];
};
import { ResponsiveContainer,CartesianGrid,XAxis,YAxis,Tooltip,LineChart,Line } from "recharts";
export default function TrafficOverview({data}:TrafficOverviewProps) {
  return (
    <div className="h-80 rounded-xl">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="visitors"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
