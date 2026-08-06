type ResponseTimeProps = {
  data: {
    time: string;
    ms: number;
  }[];
};
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area } from "recharts";
export default function ResponseTime({ data }: ResponseTimeProps) {
  return (
    <div className="h-60 rounded-xl">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="ms"
            stroke="#2563eb"
            fill="#93c5fd"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};