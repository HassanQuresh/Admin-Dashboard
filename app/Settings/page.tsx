"use client";
import ProfileForm from "./Settings-Components/ProfileForm";
import AccountPrefernces from "./Settings-Components/AccountPrefernces";
import Notifications from "./Settings-Components/Notifications";
import Security from "./Settings-Components/Security";
import Billing from "./Settings-Components/Billing";
import Team from "./Settings-Components/Team";
import APIKeys from "./Settings-Components/APIKeys";
import DeleteZone from "./Settings-Components/DeleteZone";
export default function Settings() {
  return (
    <div className="bg-gray-100 min-h-full p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-500 mt-2">
            Manage your account preferences, security, notifications and team
            settings.
          </p>
        </div>
        <button className="bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition cursor-pointer">
          Save Changes
        </button>
      </div>
      <ProfileForm />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <AccountPrefernces />
        <Notifications />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <Security />
        <Billing />
      </div>
      <Team />
      <APIKeys />
      <DeleteZone />
    </div>
  );
}
