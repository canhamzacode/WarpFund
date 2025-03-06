'use client';

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { Layout } from '@/components';

const WagmiProvider = dynamic(() => import('@/components/providers/WagmiProvider'), {
  ssr: false
});

export function Providers({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider>
      <Layout>{children}</Layout>
    </WagmiProvider>
  );
}
