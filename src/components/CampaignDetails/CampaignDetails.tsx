import React from 'react';
import { Input } from '../Input';
import { SelectInput } from '../SelectInput';
import { CATEGORIES } from '@/constants';

const CampaignDetails = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div>
        <h3 className="font-medium">Campaign Details</h3>
        <p className="text-sm text-grey">
          Let&apos;s start with the basic information about your campaign.
        </p>
      </div>
      <div className="w-full flex flex-col gap-4">
        <Input name="title" label="Title" placeholder="eg. Help Save Our Local Animal Shelter" />
        <SelectInput name="category" label="Category" options={CATEGORIES} className="w-full" />
        <Input name="goal" type="number" label="Fundraising Goal ($)" placeholder="eg. 5000" />
        <Input name="endDate" type="date" label="End Date" />
      </div>
    </div>
  );
};

export default CampaignDetails;
