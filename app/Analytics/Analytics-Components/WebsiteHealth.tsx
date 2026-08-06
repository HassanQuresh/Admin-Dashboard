type WebsiteHealthProps = {
  data: {
    metric: string;
    value: number;
  }[];
};
export default function WebsiteHealth({ data }: WebsiteHealthProps) {
  return (
    <div className="h-60 rounded-xl">
      <div className="space-y-5">
        {data.map((item) => (
          <div key={item.metric}>
            <div className="flex justify-between mb-2">
              <span className="font-medium">{item.metric}</span>
              <span>{item.value}%</span>
            </div>

            <div className="w-full h-3 bg-gray-200 rounded-full">
              <div
                className="h-3 bg-green-500 rounded-full"
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
