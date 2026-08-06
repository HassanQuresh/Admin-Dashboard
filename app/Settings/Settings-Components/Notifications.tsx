export default function Notifications() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">Notifications</h2>
      <div className="space-y-5">
        {[
          "Email Notifications",
          "Deployment Alerts",
          "Weekly Reports",
          "Security Alerts",
          "Marketing Emails",
        ].map((item) => (
          <div
            key={item}
            className="flex justify-between items-center border-b pb-3 last:border-none"
          >
            <span>{item}</span>
            <input type="checkbox" className="w-5 h-5 cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
};