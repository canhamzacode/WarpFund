// config/index.tsx

import { cookieStorage, createStorage } from '@wagmi/core';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { mainnet, arbitrum, base, sepolia } from '@reown/appkit/networks';

// Get projectId from https://cloud.reown.com
export const projectId = 'd17690c6f3dcae367423121904c15886';

if (!projectId) {
  throw new Error('Project ID is not defined');
}

export const networks = [mainnet, arbitrum, base, sepolia];

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks
});

export const config = wagmiAdapter.wagmiConfig;

// import { http, createConfig } from '@wagmi/core'
// import { mainnet, sepolia } from '@wagmi/core/chains'

// export const config = createConfig({
//   chains: [mainnet, sepolia],
//   transports: {
//     [mainnet.id]: http(),
//     [sepolia.id]: http(),
//   },
// })
