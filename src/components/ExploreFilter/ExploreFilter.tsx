import React from 'react';
import { Input } from '../Input';
import { IoSearchOutline } from 'react-icons/io5';
import { SelectInput } from '../SelectInput';

const ExploreFilter = () => {
  const categories = [
    {
      label: 'Select Category',
      value: 'default'
    },
    {
      label: 'Education',
      value: 'education'
    },
    {
      label: 'Health',
      value: 'health'
    },
    {
      label: 'Technology',
      value: 'technology'
    },
    {
      label: 'Environment',
      value: 'environment'
    },
    {
      label: 'Social',
      value: 'social'
    }
  ];
  return (
    <div className="w-full flex flex-col gap-3 px-4">
      <div className="w-full grid grid-cols-2 gap-4">
        <Input
          icon={<IoSearchOutline />}
          name="search"
          withFormik={false}
          onChange={() => {}}
          placeholder="Search Campaigns..."
          containerClass="!rounded-[20px] h-[42px]"
        />
        <SelectInput
          withFormik={false}
          name="categories"
          options={categories}
          className="w-full rounded-4xl"
        />
      </div>
    </div>
  );
};

export default ExploreFilter;
