'use client';

import { useLoadFrames } from '@/hooks';
import React, { ReactNode } from 'react';
import { Navbar } from '../Navbar';
import { Navigation } from '../Navigation';
import { RiHomeSmile2Line } from 'react-icons/ri';
import { usePathname } from 'next/navigation';
import { IoSearchOutline } from 'react-icons/io5';
import { GoPlusCircle } from 'react-icons/go';
import { FiUser } from 'react-icons/fi';

interface ILayoutProps {
  children: ReactNode;
}

const routes = [
  {
    name: 'Home',
    icon: <RiHomeSmile2Line size={20} />,
    path: '/'
  },
  {
    name: 'Explore',
    icon: <IoSearchOutline size={20} />,
    path: '/explore'
  },
  {
    name: 'Create',
    icon: <GoPlusCircle size={20} />,
    path: '/create'
  },
  {
    name: 'Dashboard',
    icon: <FiUser size={20} />,
    path: '/dashboard'
  }
];

const Layout = ({ children }: ILayoutProps) => {
  const { isSDKLoaded } = useLoadFrames();
  const pathname = usePathname();

  if (!isSDKLoaded) {
    return <div>Loading...</div>;
  }

  const isAuthPage = ['/auth', '/onboarding'].some((path) => pathname.startsWith(path));
  const isValidRoute = routes.some((route) => route.path === pathname);

  return (
    <div>
      <Navbar />
      <div className="w-full max-w-[1400px] h-full mx-auto flex-grow pb-[85px]">{children}</div>
      {!isAuthPage && isValidRoute && <Navigation routes={routes} pathname={pathname} />}
    </div>
  );
};

export default Layout;
