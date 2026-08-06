import Link from "next/link";
export default function SideBar() {
  const pages = [
    { name: "Overview", href: "/" },
    { name: "Projects", href: "/Projects" },
    { name: "Deployments", href: "/Deployments" },
    { name: "Analytics", href: "/Analytics" },
    { name: "Domains", href: "/Domains" },
    { name: "Settings", href: "/Settings" },
  ];
  return (
    <aside className="w-64 bg-white border-r border-gray-200">
      <nav className="p-4">
        <ul className="flex flex-col">
          {pages.map((page) => (
            <li
              key={page.name}
              className="block rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-black transition"
            >
              <Link href={page.href}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
