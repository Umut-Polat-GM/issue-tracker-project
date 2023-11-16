import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const Navbar = () => {
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href={"/"}>
        <AiFillBug />
      </Link>
      <div className="flex space-x-6">
        {links.map(({ href, label }) => (
          <Link
            href={href}
            key={href}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
