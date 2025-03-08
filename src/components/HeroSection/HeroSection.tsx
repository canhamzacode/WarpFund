import React from 'react';
import { Input } from '../Input';
import { IoSearchOutline } from 'react-icons/io5';

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col gap-3 p-4">
      <h1 className="font-bold text-xl">
        Discover & Fund <br /> Amazing Ideas
      </h1>
      <p className="text-grey text-sm">
        Support campaigns that matter to you and track your impact in real-time.
      </p>
      <Input
        icon={<IoSearchOutline />}
        name="search"
        withFormik={false}
        onChange={() => {}}
        placeholder="Search Campaigns..."
        containerClass="!rounded-[20px]"
      />
    </div>
  );
};

export default HeroSection;
