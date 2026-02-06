import Link from 'next/link';
import { Button } from './ui/button';
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className="py-8 text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl md:text-4xl font-bold">
            PS<span className="text-green-400">.</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link
            href="https://wa.me/+6285704128095"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
export default Header;
