"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { links } from "@/data/nav-links";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="cursor-pointer text-[32px] text-green-400" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Putra Sedana<span className="text-green-400">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${
                (link.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.path)) &&
                "text-green-400 border-b-2 border-green-500"
              } text-xl capitalize hover:text-green-400 transition-all`}
            >
              <h2 className="text-2xl font-semibold">{link.name}</h2>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
