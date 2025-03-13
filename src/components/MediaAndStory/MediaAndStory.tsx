import React from 'react';
import { ImageUploader } from '../ImageUploader';
import { TextArea } from '../TextArea';

const MediaAndStory = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div>
        <h3 className="font-medium">Media & Story</h3>
        <p className="text-sm text-grey">
          Upload your campaign image and tell your story to inspire supporters.
        </p>
      </div>
      <div className="w-full flex flex-col gap-4">
        <ImageUploader name="campaignImage" label="Campaign Image" />
        <div>
          <TextArea
            name="campaignDescription"
            label="Campaign Description"
            rows={6}
            placeholder="Share your story. Why is this important? How will the fund be used? "
          />
          <p className="text-xs text-grey">
            Pro tip: Be specific and personal. Campaigns with detailed stories tend to raise more
            funds.
          </p>
        </div>
        <TextArea name="aboutYou" label="About You (Optional)" rows={4} />
      </div>
    </div>
  );
};

export default MediaAndStory;
