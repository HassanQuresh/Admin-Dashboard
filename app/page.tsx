import StatCard from "./components/StatCard";
import { stats } from "./data/stats";
import { recentActivity } from "./data/activity";
import { recentProjects } from "./data/projects";
import StatusBadge from "./components/StatusBadge";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-gray-100 min-h-full p-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900">Welcome back, Hassan</h2>
      <h3 className="text-lg text-gray-500 mt-2">
        Here is what is happening with your projects today.
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
        {stats.map((stat, i) => (
          <StatCard title={stat.title} value={stat.value} key={i} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        <div className="text-2xl font-semibold text-gray-900">
          Recent Activity
        </div>
        <div className="text-2xl font-semibold text-gray-900">
          Quick Actions
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
          {recentActivity.map((activity) => (
            <div
              key={activity.id}
              className="border-b border-gray-200 pb-4 last:border-none"
            >
              <p className="font-medium text-gray-800">{activity.message}</p>
              <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 justify-center">
          <button className="w-full bg-black text-white rounded-lg py-3 font-medium hover:bg-gray-800 transition duration-200 cursor-pointer">
            + New Project
          </button>
          <button className="w-full bg-black text-white rounded-lg py-3 font-medium hover:bg-gray-800 transition duration-200 cursor-pointer">
            Deploy Now
          </button>
          <button className="w-full bg-black text-white rounded-lg py-3 font-medium hover:bg-gray-800 transition duration-200 cursor-pointer">
            View Analytics
          </button>
          <button className="w-full bg-black text-white rounded-lg py-3 font-medium hover:bg-gray-800 transition duration-200 cursor-pointer">
            <Link href="./Settings">Settings</Link>
          </button>
        </div>
      </div>
      <div className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
        Recent Projects
      </div>
      <div className="grid grid-cols-4 px-6 py-4 bg-gray-200 rounded-t-xl text-sm font-semibold text-gray-600 uppercase tracking-wide">
        <div>Project</div>
        <div>FrameWork</div>
        <div>Status</div>
        <div>Last Deployment</div>
      </div>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {recentProjects.map((project) => (
          <div
            className="grid grid-cols-4 items-center px-6 py-5 border-b border-gray-200 last:border-none hover:bg-gray-50 transition"
            key={project.id}
          >
            <p className="font-semibold text-gray-800">{project.name}</p>
            <p className="text-gray-600">{project.framework}</p>
            <div>
              <StatusBadge projectStatus={project.status} />
            </div>
            <p className="text-gray-500 text-sm">{project.lastDeployment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
