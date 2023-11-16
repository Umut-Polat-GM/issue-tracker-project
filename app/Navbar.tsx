"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classNames from "classnames";

const Navbar = () => {
  const curretPath = usePathname();

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
            className={classNames({
              "text-zinc-900": curretPath === href,
              "text-zinc-500": curretPath !== href,
              "hover:text-zinc-800 transition-colors": true,
            })}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
