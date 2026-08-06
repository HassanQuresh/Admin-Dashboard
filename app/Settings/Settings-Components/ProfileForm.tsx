export default function ProfileForm() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-6">Profile</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col items-center">
          <div className="w-28 h-28 rounded-full bg-gray-300"></div>
          <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer">
            Upload New
          </button>
        </div>
        <div className="flex-1 space-y-5">
          <div>
            <label className="block text-sm text-gray-500 mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-2">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-2">Role</label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2 bg-gray-100 text-gray-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};