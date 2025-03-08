'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { HiX } from 'react-icons/hi';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { Overlay } from '../Overlay';
import { RiHome6Line } from 'react-icons/ri';
import { AiOutlinePlusCircle, AiOutlineUser } from 'react-icons/ai';

const NAV_LINKS = [
  { name: 'Home', href: '/', icon: RiHome6Line },
  { name: 'Create Campaign', href: '/create', icon: AiOutlinePlusCircle },
  { name: 'Dashboard', href: '/dashboard', icon: AiOutlineUser }
];

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setSidebar((prev) => !prev);

  return (
    <>
      {/* Navbar */}
      <div className="w-full h-[56px] border-b border-gray-200 bg-white">
        <div className="w-full max-w-[1400px] h-full mx-auto flex items-center justify-between px-4">
          <h1 className="text-base font-bold text-gray-900">
            {NAV_LINKS.find((link) => link.href === pathname)?.name || 'FundWave'}
          </h1>
          <button
            onClick={toggleSidebar}
            className="cursor-pointer text-gray-700 hover:text-gray-900 transition"
          >
            <HiOutlineBars3 size={28} />
          </button>
        </div>
      </div>

      {/* Overlay */}
      {sidebar && <Overlay onClick={() => toggleSidebar()} />}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[320px] bg-white shadow-xl border-l border-gray-200 px-6 py-5 transform ${
          sidebar ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-gray-900">FundWave</h2>
            <p className="text-xs text-gray-500">Crowdfunding for everyone</p>
          </div>
          <button
            onClick={toggleSidebar}
            className="text-gray-700 hover:text-gray-900 transition cursor-pointer"
          >
            <HiX size={28} />
          </button>
        </div>

        <ul className="mt-8 space-y-4">
          {NAV_LINKS.map(({ name, href, icon: Icon }) => (
            <li key={href}>
              <a
                href={href}
                className={`flex items-center gap-3 px-4 py-2 rounded-md transition ${
                  pathname === href
                    ? 'bg-gray-100 text-[#020817]'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <Icon className="text-basel" />
                <span className="text-sm font-medium">{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
