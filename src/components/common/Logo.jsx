import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="home" className="p-3">
      <img src="../../../public/logo.png" alt="Logo" />
    </Link>
  );
};

export default Logo;
