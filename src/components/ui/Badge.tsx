const Badge = ({ completed }: { completed: boolean }) => {
  const statusBadgeColors = completed
    ? "bg-green-500 shadow-green-800"
    : "bg-yellow-600 shadow-yellow-800";

  return (
    <p
      className={`${statusBadgeColors} transition select-none pointer-events-none shadow-sm rounded-full w-fit px-3 py-0.5 font-semibold text-white`}
    >
      {completed ? "Done" : "Pending"}
    </p>
  );
};
export default Badge;
