import { campaigns } from '@/constants';
import React from 'react';

const CampaignCard = ({
  title,
  description,
  amountRaised,
  targetAmount
}: (typeof campaigns)[0]) => (
  <div className="flex flex-col w-full border border-gray-300 rounded-lg shadow-lg overflow-hidden bg-white">
    <div className="h-[160px] w-full bg-gray-300"></div>
    <div className="p-4 flex flex-col gap-2 text-xs">
      <h3 className="font-bold text-sm">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <div className="flex items-center gap-2 text-primary font-bold text-sm">
        ${' '}
        <p>
          {amountRaised} / {targetAmount}
        </p>
      </div>
    </div>
  </div>
);

export default CampaignCard;
