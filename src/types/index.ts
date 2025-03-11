import { FILTERS } from '@/constants';
import { ReactNode } from 'react';

export type FilterTypes = (typeof FILTERS)[number];

export interface Campaign {
  title: string;
  description: string;
  amountRaised: number;
  targetAmount: number;
  image: string;
}

export interface INavProps {
  name: string;
  icon: ReactNode;
  path: string;
}
