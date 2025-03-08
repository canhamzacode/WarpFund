import { FILTERS } from '@/constants';

export type FilterTypes = (typeof FILTERS)[number];

export interface Campaign {
  title: string;
  description: string;
  amountRaised: number;
  targetAmount: number;
  image: string;
}
