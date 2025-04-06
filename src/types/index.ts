import { FILTERS } from '@/constants';
import { ReactNode } from 'react';

export type FilterTypes = (typeof FILTERS)[number];

export interface ContractCampaign {
  creator: `0x${string}`;
  title: string;
  description: string;
  goal: bigint;
  deadline: bigint;
  fundsRaised: bigint;
  withdrawn: boolean;
  categoryIndex: bigint;
}

export interface Campaign {
  title: string;
  description: string;
  amountRaised: number;
  targetAmount: number;
  image: string;
  goal: number;
  fundsRaised: number;
  deadline: number;
  creator: string;
  categoryIndex: number;
  withdrawn: boolean;
}

export interface NewCampaignInput {
  title: string;
  description: string;
  goal: number;
  duration: number;
  categoryIndex: number;
}

export interface INavProps {
  name: string;
  icon: ReactNode;
  path: string;
}
