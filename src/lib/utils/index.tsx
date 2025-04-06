import { Campaign, ContractCampaign } from '@/types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseCampaign = (contractCampaign: ContractCampaign): Campaign => ({
  creator: contractCampaign.creator,
  title: contractCampaign.title,
  description: contractCampaign.description,
  goal: Number(contractCampaign.goal),
  deadline: Number(contractCampaign.deadline),
  fundsRaised: Number(contractCampaign.fundsRaised),
  categoryIndex: Number(contractCampaign.categoryIndex),
  withdrawn: contractCampaign.withdrawn,
  amountRaised: Number(contractCampaign.fundsRaised),
  targetAmount: Number(contractCampaign.goal),
  image: ''
});
