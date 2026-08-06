"use client";
import StatCard from "../components/StatCard";
import * as data from "../data/domains";
import SearchRow from "./Domains-Components/SearchRow";
import DomainsContainer from "./Domains-Components/DomainsContainer";
import DNSRecords from "./Domains-Components/DNSRecords";
import SSLCertificates from "./Domains-Components/SSLCertificates";
import RecentDomainActivity from "./Domains-Components/RecentDomainActivity";
import { useState } from "react";
export default function Domains() {
  const [inputValue, setInputValue] = useState("");
  const [statusValue, setStatusValue] = useState("All");
  const [sortValue, setSortValue] = useState("A-Z");
  const filteredDomains = data.domains.filter((domain) => {
    const search = inputValue.toLowerCase().trim();
    const matchesSearch =
      domain.domain.toLowerCase().includes(search) ||
      domain.project.toLowerCase().includes(search);
    const matchesStatus =
      domain.status === statusValue || statusValue === "All";
    return matchesSearch && matchesStatus;
  });
  if (sortValue === "A-Z") {
    filteredDomains.sort((a, b) => a.domain.localeCompare(b.domain));
  } else if (sortValue === "Z-A") {
    filteredDomains.sort((a, b) => b.domain.localeCompare(a.domain));
  }
  return (
    <div className="bg-gray-100 min-h-full p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Domains</h1>
          <p className="text-gray-500 mt-2">
            Manage your custom domains and DNS configuration.
          </p>
        </div>
        <button className="bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 shadow-md hover:shadow-lg transition cursor-pointer">
          + Add Domain
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
        {data.domainStats.map((stat) => (
          <StatCard key={stat.title} title={stat.title} value={stat.value} />
        ))}
      </div>
      <SearchRow
        sortValue={sortValue}
        inputValue={inputValue}
        statusValue={statusValue}
        setSortValue={setSortValue}
        setInputValue={setInputValue}
        setStatusValue={setStatusValue}
      />
      <DomainsContainer
        filteredDomains={filteredDomains}
        setInputValue={setInputValue}
        setSortValue={setSortValue}
        setStatusValue={setStatusValue}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <DNSRecords data={data} />
        <SSLCertificates data={data} />
      </div>
      <RecentDomainActivity data={data}/>
    </div>
  );
}
