const Empty = ({ icon, title, message }) => {
  return (
    <div className="mt-10 flex flex-col items-center space-y-3">
      <div className="bg-accent rounded-full p-3">{icon}</div>
      <h5 className="text-lg font-bold">{title}</h5>
      <p>{message}</p>
    </div>
  );
};

export default Empty;
