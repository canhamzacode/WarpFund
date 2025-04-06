'use client';

import { CampaignsList, ExploreFilter, FilterBar } from '@/components';
import { FILTERS } from '@/constants';
import { useCampaign } from '@/hooks';
import { FilterTypes } from '@/types';
import React, { useEffect, useState } from 'react';

const Explore = () => {
  const { campaigns, getAllCampaigns } = useCampaign();

  useEffect(() => {
    getAllCampaigns();
  }, []);

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
