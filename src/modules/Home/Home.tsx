'use client';

import { CampaignsList, FilterBar, HeroSection } from '@/components';
import { campaigns, FILTERS } from '@/constants';
import { FilterTypes } from '@/types';
import React, { useState } from 'react';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState<FilterTypes>(FILTERS[0]);

  return (
    <div className="w-full mt-6 flex flex-col gap-6">
      <HeroSection />
      <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <CampaignsList campaigns={campaigns} />
    </div>
  );
};

export default Home;
