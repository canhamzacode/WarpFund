import React from 'react';
import { Input } from '../Input';
import { IoSearchOutline } from 'react-icons/io5';

const ExploreFilter = () => {
  return (
    <div className="w-full flex flex-col gap-3 px-4">
      <Input
        icon={<IoSearchOutline />}
        name="search"
        withFormik={false}
        onChange={() => {}}
        placeholder="Search Campaigns..."
        containerClass="!rounded-[20px]"
      />
      <div className="w-full grid grid-cols-2 gap-4"></div>
    </div>
  );
};

export default ExploreFilter;
