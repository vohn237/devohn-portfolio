'use client';

import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { usePathname } from 'next/navigation';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';

const links = [
  { name: 'home', path: '/' },
  { name: 'services', path: '/services' },
  { name: 'resume', path: '/resume' },
  { name: 'work', path: '/work' },
  { name: 'contact', path: '/contact' },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log('Menu state after toggle:', !isOpen);
  };
  const closeMenu = () => {
    console.log('Closing menu');
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onDismiss={closeMenu}>
      <SheetTrigger
        onClick={toggleMenu}
        className="flex justify-center items-center"
      >
        <AiOutlineMenu className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="self-end p-4">
          <IoMdClose
            className="text-[32px] text-accent cursor-pointer"
            onClick={closeMenu}
          />
        </div>
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" passHref legacyBehavior>
            <a onClick={closeMenu} className="cursor-pointer">
              Devohn <span className="text-accent">.</span>
            </a>
          </Link>
        </div>

        {/* nav links */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link key={index} href={link.path} passHref legacyBehavior>
              <a
                onClick={closeMenu}
                className={`${
                  link.path === pathname
                    ? 'text-accent border-b-2 border-accent'
                    : ''
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </a>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
