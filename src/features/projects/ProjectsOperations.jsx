import Filter from "@/components/common/Filter";

const ProjectsOperations = () => {
  const options = [
    { value: "all", label: "All Statuses" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Completed" },
  ];

  return (
    <div className="mb-5">
      <Filter field={"status"} options={options} />
    </div>
  );
};

export default ProjectsOperations;
