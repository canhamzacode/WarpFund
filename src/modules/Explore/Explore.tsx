'use client';
import { CampaignsList, ExploreFilter, FilterBar } from '@/components';
import { campaigns, FILTERS } from '@/constants';
import { FilterTypes } from '@/types';
import React, { useState } from 'react';

const Explore = () => {
  const [activeFilter, setActiveFilter] = useState<FilterTypes>(FILTERS[0]);
  return (
    <div className="w-full mt-6 flex flex-col gap-6">
      <ExploreFilter />
      <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <CampaignsList campaigns={campaigns} isFiltered />
    </div>
  );
};

export default Explore;
