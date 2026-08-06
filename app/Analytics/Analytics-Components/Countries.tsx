type CountriesProp = {
  data: {
    country: string;
    visitors: number;
  }[];
};
import {
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";
export default function Countries({ data }: CountriesProp) {
  return (
    <div className="h-60 rounded-xl">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 20, left: 20, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis
            type="category"
            dataKey="country"
            tickLine={false}
            axisLine={false}
          />
          <Tooltip />
          <Bar dataKey="visitors" fill="#2563eb" radius={[0, 8, 8, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
