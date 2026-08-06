import Image from "next/image";
import NotificationIcon from "../images/notification.png";
import User from "../images/user.jpg";

export default function Navbar() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 px-8 flex items-center justify-between shadow-sm">
      <div>
        <input
          type="text"
          placeholder="Search projects..."
          className="w-80 rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="cursor-pointer rounded-full p-2 hover:bg-gray-100 transition">
          <Image
            src={NotificationIcon}
            alt="Notifications"
            width={22}
            height={22}
          />
        </button>

        <div className="h-8 w-px bg-gray-300" />

        <div className="flex items-center gap-3 cursor-pointer rounded-lg px-2 py-1 hover:bg-gray-100 transition">
          <Image
            src={User}
            alt="User"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-800">
              Hassan
            </p>
            <p className="text-xs text-gray-500">
              Frontend Developer
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}