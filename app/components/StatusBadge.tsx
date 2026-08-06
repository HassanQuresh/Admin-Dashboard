type StatusBadgeProps = {
  projectStatus: string;
};
export default function StatusBadge({ projectStatus }: StatusBadgeProps) {
  return (
    <>
      <span
        className={`inline-block px-3 py-1 rounded-full text-sm font-semibold
                ${
                  projectStatus === "Active" || projectStatus === "Valid"
                    ? "bg-green-100 text-green-700"
                    : ""
                }
                ${
                  projectStatus === "Building" || projectStatus === "Generating"
                    ? "bg-yellow-100 text-yellow-700"
                    : ""
                }
                ${projectStatus === "Failed" || projectStatus === "Expired"
                   ? "bg-red-100 text-red-700" : ""}`}
      >
        {projectStatus}
      </span>
    </>
  );
}
