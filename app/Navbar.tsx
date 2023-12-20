import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex bg-slate-300 p-3">
      <Link className="mr-5" href="/">
        Home
      </Link>
      <Link href="/users">Users</Link>
    </nav>
  );
};

export default Navbar;
