interface ProgressBarProps {
  stepIndex: number;
  totalSteps: number;
}

const ProgressBar = ({ stepIndex, totalSteps }: ProgressBarProps) => {
  return (
    <div className="px-4">
      <div className="w-full h-1 rounded-xl bg-grey">
        <div
          className="h-full bg-primary rounded-xl"
          style={{ width: `${((stepIndex + 1) / totalSteps) * 100}%` }}
        ></div>
      </div>
      <div className="w-full flex items-end justify-end px-4">
        <p className="text-sm text-grey">
          Step {stepIndex + 1} of {totalSteps}
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;
