'use client';
import { ReactNode, useState } from 'react';

interface UseMultiStepFormProps {
  steps: ReactNode[];
}

const useMultiStepForm = ({ steps }: UseMultiStepFormProps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((i) => (i < steps.length - 1 ? i + 1 : i));
  };

  const prev = () => {
    setCurrentStepIndex((i) => (i > 0 ? i - 1 : i));
  };

  const goToStep = (index: number) => {
    if (index >= 0 && index < steps.length) {
      setCurrentStepIndex(index);
    }
  };

  return {
    step: steps[currentStepIndex],
    stepIndex: currentStepIndex,
    isLastStep: currentStepIndex === steps.length - 1,
    isFirstStep: currentStepIndex === 0,
    next,
    prev,
    goToStep
  };
};

export default useMultiStepForm;
