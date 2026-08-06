export default function DeleteZone() {
  return (
    <div className="bg-red-50 border border-red-200 rounded-xl p-6 mt-8 mb-8">
      <h2 className="text-2xl font-semibold text-red-600 mb-4">Danger Zone</h2>
      <p className="text-gray-700">
        Delete your account permanently. This action cannot be undone.
      </p>
      <button className="mt-6 bg-red-600 text-white px-5 py-3 rounded-lg hover:bg-red-700 transition cursor-pointer">
        Delete Account
      </button>
    </div>
  );
};