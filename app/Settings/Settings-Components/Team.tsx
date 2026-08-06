export default function Team() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-6">Team</h2>
      <div>
        <label className="block text-sm text-gray-500 mb-2">Team Name</label>
        <input type="text" className="w-full border rounded-lg px-4 py-2" />
      </div>
      <div className="mt-8">
        <h3 className="font-semibold mb-4">Members</h3>
        <div className="space-y-4">
          {[
            ["Hassan Qureshi", "Owner"],
            ["Ali Ahmed", "Developer"],
            ["Ahmed Khan", "Viewer"],
          ].map(([name, role]) => (
            <div
              key={name}
              className="flex justify-between border-b pb-3 last:border-none"
            >
              <span>{name}</span>
              <span className="text-gray-500">{role}</span>
            </div>
          ))}
        </div>
        <button className="mt-6 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
          Invite Member
        </button>
      </div>
    </div>
  );
};