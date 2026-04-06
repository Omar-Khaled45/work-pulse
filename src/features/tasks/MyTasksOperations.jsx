import Filter from "@/components/common/Filter";

const MyTasksOperations = () => {
  const options = [
    { value: "all", label: "All Statuses" },
    { value: "todo", label: "To do" },
    { value: "in-progress", label: "In Progress" },
    { value: "done", label: "Done" },
  ];

  return (
    <div className="mb-5">
      <Filter field={"status"} options={options} />
    </div>
  );
};

export default MyTasksOperations;
