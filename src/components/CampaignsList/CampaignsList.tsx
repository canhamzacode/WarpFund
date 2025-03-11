import { Campaign } from '@/types';
import Link from 'next/link';
import React from 'react';
import { CampaignCard } from '../CampaignCard';

export interface ICampaignsList {
  campaigns: Campaign[];
  isFiltered?: boolean;
}

const CampaignsList = ({ campaigns, isFiltered }: ICampaignsList) => (
  <div className="w-full flex flex-col px-4 gap-4">
    {isFiltered ? (
      <h1 className="font-bold text-sm">{campaigns.length} Campaign(s)</h1>
    ) : (
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-sm">Featured Campaigns</h1>
        <Link href="/explore" className="text-xs text-primary">
          View All
        </Link>
      </div>
    )}
    <div className="grid gap-4 w-full">
      {campaigns.map((camp, index) => (
        <CampaignCard key={index} {...camp} />
      ))}
    </div>
  </div>
);

export default CampaignsList;
