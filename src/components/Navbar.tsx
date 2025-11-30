import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <Link className="btn btn-ghost text-xl" href="/">
        Home
      </Link>
    </div>
  );
};

export default Navbar;
