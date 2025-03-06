import { useLoadFrames } from '@/hooks';
import React, { ReactNode } from 'react';
import { Navbar } from '../Navbar';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const { isSDKLoaded } = useLoadFrames();

  if (!isSDKLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Navbar />
      <div className="w-full max-w-[1400px] h-full mx-auto ">{children}</div>
    </div>
  );
};

export default Layout;
