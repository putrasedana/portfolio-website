"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { links } from "@/data/nav-links";

const pathToHash = (pathname: string, hash: string) => {
  if (hash) return hash;
  if (pathname === "/projects") return "#projects";
  if (pathname === "/resume") return "#resume";
  if (pathname === "/certifications") return "#certifications";
  return "#home";
};

const Nav = () => {
  const [hash, setHash] = useState("#home");

  useEffect(() => {
    const updateHash = () => {
      const pathname = window.location.pathname;
      const currentHash = window.location.hash;
      setHash(pathToHash(pathname, currentHash));
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          onClick={() => setHash(link.path)}
          className={`${link.path === hash ? "text-green-400 border-b-2 border-green-500" : ""} capitalize font-medium hover:text-green-400 transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
