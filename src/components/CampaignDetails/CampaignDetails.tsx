import React from 'react';
import { Input } from '../Input';
import { SelectInput } from '../SelectInput';
import { useCampaign } from '@/hooks';

const CampaignDetails = () => {
  const { categories } = useCampaign();

  const allCategories = categories.map((category, index) => ({
    label: category,
    value: String(index)
  }));

  console.log('categories', categories);
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
        <SelectInput
          name="categoryIndex"
          label="Category"
          options={allCategories}
          className="w-full"
        />
        <Input name="goal" type="number" label="Fundraising Goal ($)" placeholder="eg. 5000" />
        <Input name="endDate" type="date" label="End Date" />
      </div>
    </div>
  );
};

export default CampaignDetails;
