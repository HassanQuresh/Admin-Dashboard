"use client";
import { deployments } from "../data/deployments";
import { useState } from "react";
import StatCard from "../components/StatCard";
import SearchRow from "./Deployments-Components/SearchRow";
import DeploymentsContainer from "./Deployments-Components/DeploymentsContainer";
export default function Deployments() {
  const [inputValue, setInputValue] = useState("");
  const [statusValue, setStatusValue] = useState("All");
  const [environmentValue, setEnvironmentValue] = useState("All");
  const [sortValue, setSortValue] = useState("A-Z");
  const filteredDeployments = deployments.filter((deployment) => {
    const search = inputValue.toLowerCase().trim();
    const matchesSearch = deployment.project.toLowerCase().includes(search);
    const matchesStatus =
      statusValue === "All" || deployment.status === statusValue;
    const matchesEnvironment =
      environmentValue === "All" || deployment.environment === environmentValue;
    return matchesSearch && matchesStatus && matchesEnvironment;
  });
  if (sortValue === "A-Z") {
    filteredDeployments.sort((a, b) => a.project.localeCompare(b.project));
  } else if (sortValue === "Z-A") {
    filteredDeployments.sort((a, b) => b.project.localeCompare(a.project));
  }
  const total = deployments.length;
  const active = deployments.filter(
    (deployment) => deployment.status === "Active",
  ).length;
  const building = deployments.filter(
    (deployment) => deployment.status === "Building",
  ).length;
  const failed = deployments.filter(
    (deployment) => deployment.status === "Failed",
  ).length;
  return (
    <div className="bg-gray-100 min-h-full p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Deployments</h1>

          <p className="text-gray-500 mt-2">
            Track every deployment across all projects.
          </p>
        </div>

        <button className="bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition cursor-pointer">
          + Deployment
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
        <StatCard title="Total" value={total} />
        <StatCard title="Active" value={active} />
        <StatCard title="Building" value={building} />
        <StatCard title="Failed" value={failed} />
      </div>
      <SearchRow
        sortValue={sortValue}
        inputValue={inputValue}
        statusValue={statusValue}
        environmentValue={environmentValue}
        setSortValue={setSortValue}
        setInputValue={setInputValue}
        setStatusValue={setStatusValue}
        setEnvironmentValue={setEnvironmentValue}
      />
      <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
        Deployment History
      </h2>
      <div>
        <DeploymentsContainer
          filteredDeployments={filteredDeployments}
          setInputValue={setInputValue}
          setStatusValue={setStatusValue}
          setEnvironmentValue={setEnvironmentValue}
          setSortValue={setSortValue}
        />
      </div>
    </div>
  );
}
