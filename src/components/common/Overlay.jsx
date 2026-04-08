const Overlay = ({ state, setState }) => {
  return (
    <div
      className={`transition-300 fixed inset-0 z-1 bg-black/40 md:hidden ${state ? "visible opacity-100" : "invisible opacity-0"}`}
      onClick={() => setState(false)}
    ></div>
  );
};

export default Overlay;
