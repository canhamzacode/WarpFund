'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createAppKit } from '@reown/appkit/react';
import {
  mainnet,
  arbitrum,
  avalanche,
  base,
  optimism,
  polygon,
  anvil,
  sepolia
} from '@reown/appkit/networks';
import { WagmiProvider, type Config } from 'wagmi';
import { wagmiAdapter, projectId } from '@/lib/config';
import React, { type ReactNode } from 'react';

// Set up Query Client
const queryClient = new QueryClient();

if (!projectId) {
  throw new Error('Project ID is not defined');
}

// Set up metadata
const metadata = {
  name: 'warp-fund',
  description: 'AppKit Example',
  url: 'https://reown.com/appkit', // Ensure this matches your domain
  icons: ['https://assets.reown.com/reown-profile-pic.png']
};

// Create the Reown Wallet Modal
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [mainnet, arbitrum, avalanche, base, optimism, polygon, anvil, sepolia],
  defaultNetwork: sepolia,
  metadata,
  features: {
    analytics: true
  }
});

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
