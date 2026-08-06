"use client";
import { projects } from "../data/projects";
import SearchRow from "./Projects-Components/SearchRow";
import ProjectsContainer from "./Projects-Components/ProjectsContainer";
import { useState } from "react";
export default function Projects() {
  const [inputValue, setInputValue] = useState("");
  const [statusValue, setStatusValue] = useState("All");
  const [frameworkValue, setFrameworkValue] = useState("All");
  const [sortValue, setSortValue] = useState("A-Z");
  const filteredProjects = projects.filter((project) => {
    const search = inputValue.toLowerCase().trim();
    const matchesSearch = project.name.toLowerCase().includes(search);
    const matchesStatus =
      statusValue === "All" || project.status === statusValue;
    const matchesFramework =
      frameworkValue === "All" || project.framework === frameworkValue;
    return matchesSearch && matchesStatus && matchesFramework;
  });
  if (sortValue === "A-Z") {
    filteredProjects.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortValue === "Z-A") {
    filteredProjects.sort((a, b) => b.name.localeCompare(a.name));
  }
  return (
    <div className="bg-gray-100 min-h-full p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-500 mt-2">
            Manage and monitor all your deployed applications.
          </p>
        </div>
        <button className="bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition cursor-pointer">
          + New Project
        </button>
      </div>
      <SearchRow
        inputValue={inputValue}
        statusValue={statusValue}
        frameworkValue={frameworkValue}
        sortValue={sortValue}
        setInputValue={setInputValue}
        setStatusValue={setStatusValue}
        setFrameworkValue={setFrameworkValue}
        setSortValue={setSortValue}
      />
      <ProjectsContainer
        filteredProjects={filteredProjects}
        setInputValue={setInputValue}
        setStatusValue={setStatusValue}
        setFrameworkValue={setFrameworkValue}
        setSortValue={setSortValue}
      />
    </div>
  );
}
