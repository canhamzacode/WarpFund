'use client';
import { CampaignDetails, MediaAndStory, ProgressBar, StepNavigation } from '@/components';
import { useCampaign, useMultiStepForm } from '@/hooks';
import { Form, Formik } from 'formik';
import React from 'react';
import { campaignDetailsSchema, mediaAndStorySchema } from './schema';

interface ICampaign {
  title: string;
  categoryIndex: number;
  goal: number;
  endDate: string;
  campaignImage?: File | null;
  description: string;
}

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
  const { createCampaign } = useCampaign();

  const { step, stepIndex, isLastStep, isFirstStep, next, prev } = useMultiStepForm({
    steps: steps.map((s) => s.component)
  });

  const calculateDuration = (endDate: string) => {
    if (!endDate) return 0;

    const end = new Date(endDate).getTime();
    const now = new Date().getTime();

    const durationInMs = end - now;
    const durationInDays = Math.ceil(durationInMs / (1000 * 60 * 60 * 24));

    return durationInDays > 0 ? durationInDays : 0;
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <ProgressBar stepIndex={stepIndex} totalSteps={steps.length} />
      <div className="p-4">
        <Formik
          initialValues={{
            title: '',
            categoryIndex: 0,
            goal: 0,
            duration: 0,
            endDate: '',
            campaignImage: null,
            description: ''
          }}
          validationSchema={steps[stepIndex].validationSchema || null}
          onSubmit={async (values: ICampaign, { setSubmitting }) => {
            if (isLastStep) {
              console.log('Submit:', values);
              const duration = calculateDuration(values.endDate);

              createCampaign({
                title: values.title,
                description: values.description,
                goal: values.goal,
                duration,
                categoryIndex: values.categoryIndex
              });
            } else {
              next();
            }
            setSubmitting(false);
          }}
        >
          {({ handleSubmit, errors }) => {
            console.log(errors);
            return (
              <Form className="grid gap-6">
                <div>{step}</div>
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
