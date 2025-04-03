import { FILTERS } from '@/constants';
import { ReactNode } from 'react';

export type FilterTypes = (typeof FILTERS)[number];

// In your types.ts or similar file
export interface Campaign {
  title: string;
  description: string;
  amountRaised: number;
  targetAmount: number;
  image: string;
  goal: number; // Add default goal if not provided
  fundsRaised: number; // Add default fundsRaised if not provided
  deadline: number; // Add a default or null value for deadline
  creator: string; // If available, you can use an empty string or default address
  categoryIndex: number; // If applicable
  withdrawn: boolean; // Set a default
}

export interface INavProps {
  name: string;
  icon: ReactNode;
  path: string;
}
