import React from 'react';
import { GoPeople } from 'react-icons/go';
import { IoTimerOutline } from 'react-icons/io5';

import { Campaign } from '@/types';

const CampaignCard = (campaign: Campaign) => {
  const { title, description, amountRaised, targetAmount, deadline } = campaign;

  const calculateDaysLeft = (deadline: number) => {
    const currentDate = new Date().getTime() / 1000;
    const timeLeft = deadline - currentDate;
    const daysLeft = Math.ceil(timeLeft / (60 * 60 * 24));
    return daysLeft > 0 ? daysLeft : 0;
  };

  const daysLeft = calculateDaysLeft(deadline);

  return (
    <div className="flex flex-col w-full border border-gray-300 rounded-lg shadow-lg overflow-hidden bg-white">
      <div className="h-[160px] w-full bg-gray-300"></div>
      <div className="p-4 flex flex-col gap-2 text-xs">
        <h3 className="font-bold text-sm">{title}</h3>
        <p className="text-gray-700">{description}</p>
        <div className="w-full h-2 rounded-2xl bg-gray-300">
          <div
            className="h-full rounded-2xl bg-primary"
            style={{ width: `${(amountRaised / targetAmount) * 100}%` }}
          ></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary font-bold text-base">
            ${' '}
            <p>
              {amountRaised} / {targetAmount}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <GoPeople />
              30
            </div>
            <div className="flex items-center gap-1">
              <IoTimerOutline />
              {daysLeft} {daysLeft === 1 ? 'day' : 'days'} left
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
