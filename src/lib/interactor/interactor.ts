// "use client"; // Required for client-side actions

// import { ethers } from "ethers";

// export async function getContract(signer) {
//   const contractAddress = "0x3cede3f2d58017a6c76ebab3bb9db6b897400a0f";
//   // Your contract ABI here

import { createPublicClient, http } from 'viem';
import { sepolia } from 'viem/chains';

export const publicClient = createPublicClient({
  chain: sepolia,
  transport: http()
});
