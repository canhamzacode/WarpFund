'use client';
import { CampaignDetails, MediaAndStory, ProgressBar, StepNavigation } from '@/components';
import { useMultiStepForm } from '@/hooks';
import { Form, Formik } from 'formik';
import React from 'react';
import { campaignDetailsSchema, mediaAndStorySchema } from './schema';

const steps = [
  {
    component: <CampaignDetails />,
    validationSchema: campaignDetailsSchema,
    title: 'Campaign Details'
  },
  {
    title: 'Media & Story',
    component: <MediaAndStory />,
    validationSchema: mediaAndStorySchema
  }
];

const CreateCampaign = () => {
  const { step, stepIndex, isLastStep, isFirstStep, next, prev } = useMultiStepForm({
    steps: steps.map((s) => s.component)
  });

  return (
    <div className="w-full flex flex-col gap-3">
      <ProgressBar stepIndex={stepIndex} totalSteps={steps.length} />
      <div className="p-4">
        <Formik
          initialValues={{}}
          validationSchema={steps[stepIndex].validationSchema || null}
          onSubmit={(values) => {
            if (isLastStep) {
              console.log('Submit:', values);
            } else {
              next();
            }
          }}
        >
          {({ handleSubmit, errors }) => {
            console.log(errors);
            return (
              <Form className="grid gap-6 ">
                <div className="">{step}</div>
                <StepNavigation
                  isFirstStep={isFirstStep}
                  isLastStep={isLastStep}
                  handleSubmit={handleSubmit}
                  prev={prev}
                />
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default CreateCampaign;
