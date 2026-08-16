"use client";

import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { links } from "@/data/nav";

const pathToHash = (pathname: string, hash: string) => {
  if (hash) return hash;
  if (pathname === "/projects") return "#projects";
  if (pathname === "/resume") return "#resume";
  if (pathname === "/certifications") return "#certifications";
  return "#home";
};

const MobileNav = () => {
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
    <Sheet>
      <SheetTrigger className="flex justify-center items-center" aria-label="Open navigation menu">
        <CiMenuFries className="cursor-pointer text-[32px] text-green-400" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="mt-36 mb-20 text-center">
          <SheetClose asChild>
            <Link href="#home">
              <h1 className="text-4xl font-semibold">
                PS<span className="text-green-400">.</span>
              </h1>
            </Link>
          </SheetClose>
        </div>

        <nav className="flex flex-col items-center gap-8">
          {links.map((link) => (
            <SheetClose key={link.path} asChild>
              <Link
                href={link.path}
                onClick={() => setHash(link.path)}
                className={`text-xl capitalize transition-all hover:text-green-400 ${
                  link.path === hash && "text-green-400 border-b-2 border-green-500"
                }`}
              >
                <h2 className="text-2xl font-semibold">{link.name}</h2>
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
