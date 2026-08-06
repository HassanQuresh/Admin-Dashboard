export default function AccountPrefernces() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">Account Preferences</h2>
      <div className="space-y-5">
        <div>
          <label className="block text-sm text-gray-500 mb-2">Language</label>
          <select className="w-full border rounded-lg px-4 py-2">
            <option>English</option>
            <option>Urdu</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-500 mb-2">Time Zone</label>
          <select className="w-full border rounded-lg px-4 py-2">
            <option>Asia/Karachi</option>
            <option>UTC</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-500 mb-3">Theme</label>
          <div className="space-y-2">
            <label className="flex gap-2">
              <input type="radio" name="theme" />
              Light
            </label>
            <label className="flex gap-2">
              <input type="radio" name="theme" defaultChecked />
              Dark
            </label>
            <label className="flex gap-2">
              <input type="radio" name="theme" />
              System
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
