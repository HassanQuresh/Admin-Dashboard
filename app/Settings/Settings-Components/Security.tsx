export default function Security() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">Security</h2>
      <div className="space-y-5">
        <div className="flex justify-between items-center">
          <span>Password</span>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            Change Password
          </button>
        </div>
        <div className="flex justify-between items-center">
          <span>Two-Factor Authentication</span>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            Enable
          </button>
        </div>
        <div className="flex justify-between items-center">
          <span>Active Sessions</span>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            View
          </button>
        </div>
      </div>
    </div>
  );
};