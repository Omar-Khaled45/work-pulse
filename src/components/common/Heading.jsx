const Heading = ({ title, children }) => {
  return (
    <div className="space-y-2">
      <h2 className="flex items-center gap-4 text-3xl font-bold">{title}</h2>

      <p className="text-muted-foreground">{children}</p>
    </div>
  );
};

export default Heading;
