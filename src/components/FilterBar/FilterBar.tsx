import { FILTERS } from '@/constants';
import { FilterTypes } from '@/types';
import React from 'react';

interface IFilterBarProps {
  activeFilter: FilterTypes;
  setActiveFilter: (filter: FilterTypes) => void;
}

const FilterBar = ({ activeFilter, setActiveFilter }: IFilterBarProps) => (
  <div className="w-full flex gap-3 px-4 flex-wrap">
    {FILTERS.map((filter) => (
      <button
        key={filter}
        onClick={() => setActiveFilter(filter)}
        className={`text-xs h-[35px] px-4 rounded-3xl transition-colors duration-300 ${
          filter === activeFilter ? 'bg-primary text-white' : 'bg-gray-200 text-primary'
        }`}
      >
        {filter}
      </button>
    ))}
  </div>
);

export default FilterBar;
