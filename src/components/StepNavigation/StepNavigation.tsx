import { GrLinkNext } from 'react-icons/gr';
import { MdArrowBack } from 'react-icons/md';
import { Button } from '../Button';

interface StepNavigationProps {
  isFirstStep: boolean;
  isLastStep: boolean;
  handleSubmit: () => void;
  prev: () => void;
  loading?: boolean;
}

const StepNavigation: React.FC<StepNavigationProps> = ({
  isFirstStep,
  isLastStep,
  handleSubmit,
  prev,
  loading = false
}) => {
  return (
    <div
      className={`w-full gap-8 py-6 grid items-end ${
        isFirstStep ? 'justify-end grid-cols-1' : 'justify-between grid-cols-2'
      }`}
    >
      {!isFirstStep && (
        <Button type="button" onClick={prev} icon={<MdArrowBack size={18} />} iconPosition="left">
          Previous
        </Button>
      )}
      <Button
        type="submit"
        onClick={handleSubmit}
        icon={<GrLinkNext size={18} />}
        className="w-full"
        iconPosition="right"
      >
        {loading ? 'Loading...' : isLastStep ? 'Create Campaign' : 'Continue'}
      </Button>
    </div>
  );
};

export default StepNavigation;
