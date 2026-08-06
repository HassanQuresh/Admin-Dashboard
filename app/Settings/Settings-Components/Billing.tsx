export default function Billing() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">Billing</h2>
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Current Plan</h3>
        <p className="text-gray-700">Pro Plan</p>
        <p className="text-gray-500">$20 / month</p>
        <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
          Manage Subscription
        </button>
      </div>
    </div>
  );
};