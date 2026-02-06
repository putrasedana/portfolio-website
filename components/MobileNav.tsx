'use client';

import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { links } from '@/data/nav-links';

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="cursor-pointer text-[32px] text-green-400" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="mt-36 mb-20 text-center">
          <SheetClose asChild>
            <Link href="/">
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
                className={`text-xl capitalize transition-all hover:text-green-400 ${
                  (link.path === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.path)) &&
                  'text-green-400 border-b-2 border-green-500'
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
