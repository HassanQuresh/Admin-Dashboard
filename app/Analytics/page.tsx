"use client";
import * as data from "../data/analytics"
import { recentActivity } from "../data/activity";
import TrafficOverview from "./Analytics-Components/TrafficOverview";
import ResponseTime from "./Analytics-Components/ResponseTime";
import BuildDuration from "./Analytics-Components/BuildDuration";
import DeviceBreakdown from "./Analytics-Components/DeviceBreakdown";
import TopProjects from "./Analytics-Components/TopProjects";
import RecentActivity from "./Analytics-Components/RecentActivity";
import WebsiteHealth from "./Analytics-Components/WebsiteHealth";
import Countries from "./Analytics-Components/Countries";
import TrafficSources from "./Analytics-Components/TrafficSources";
import StatCard from "../components/StatCard";
export default function Analytics() {
  return (
    <div className="bg-gray-100 min-h-full p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-500 mt-2">Monitor traffic and performance.</p>
        </div>
        <button className="bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition cursor-pointer">
          Export Report
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
        {data.analytics.map((analytic) => (
          <StatCard
            title={analytic.name}
            value={analytic.value}
            key={analytic.name}
          />
        ))}
      </div>
      <div className="bg-white rounded-xl shadow-md mt-8 p-6">
        <h2 className="text-2xl font-semibold mb-4">Traffic Overview</h2>
        <TrafficOverview data={data.trafficOverview} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Response Time</h2>
          <ResponseTime data={data.responseTime} />
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Build Duration</h2>
          <BuildDuration data={data.buildDuration} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Device Breakdown</h2>
          <DeviceBreakdown data={data.deviceBreakdown} />
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Top Projects</h2>
          <TopProjects data={data.topProjects} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <RecentActivity data={recentActivity} />
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Website Health</h2>
          <WebsiteHealth data={data.websiteHealth} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Countries</h2>
          <Countries data={data.countries} />
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Traffic Sources</h2>
          <TrafficSources data={data.trafficSources} />
        </div>
      </div>
    </div>
  );
};