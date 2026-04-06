const Error = ({ error }) => {
  return (
    <div className="mt-20">
      <h4 className="bg-high text-high-foreground border-high-border mx-auto w-md rounded-lg border p-12 text-center text-xl font-semibold">
        ❌ {error}
      </h4>
    </div>
  );
};

export default Error;
