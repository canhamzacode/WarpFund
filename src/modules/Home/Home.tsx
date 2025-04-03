'use client';

import { CampaignsList, FilterBar, HeroSection } from '@/components';
import { FILTERS } from '@/constants';
import { FilterTypes } from '@/types';
import React, { useEffect, useState } from 'react';
import { useCampaign } from '../CreateCampaign/hooks';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState<FilterTypes>(FILTERS[0]);
  const { getAllCampaigns, campaigns } = useCampaign();

  useEffect(() => {
    getAllCampaigns();
  }, []);

  return (
    <div className="w-full mt-6 flex flex-col gap-6">
      <HeroSection />
      <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <CampaignsList campaigns={campaigns} />
    </div>
  );
};

export default Home;
