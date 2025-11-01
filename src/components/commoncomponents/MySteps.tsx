import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { ButtonOutline } from './ButtonOutline';
import { ButtonPrimary } from './ButtonPrimary';

interface Step {
  key: number;
  title: string;
  description: string;
}

interface StepFormProps {
  children: React.ReactNode;
  currentStep: number;
  setCurrentStep: (index: number) => void;
  steps: Step[];
  sidebarWidth?: string;
  contentWidth?: string;
  backButtonText?: string;
  nextButtonText?: string;
  submitButtonText?: string;
  onSubmit?: () => void;
  isComplete?: boolean;
}

const MySteps = ({
  children,
  currentStep,
  setCurrentStep,
  steps,
  sidebarWidth = '25%',
  contentWidth = '75%',
  backButtonText = 'Back',
  nextButtonText = 'Next',
  submitButtonText = 'Submit',
  onSubmit,
  isComplete = false,
}: StepFormProps) => {
  const isLastStep = currentStep === steps.length - 1;

  return (
    <div className="flex min-h-screen lg:flex-row flex-col gap-6">
      {/* Sidebar */}
      <div className={`w-full bg-[#152122] gap-6 p-5 py-6 rounded-sm ${sidebarWidth}`}>
        <ol>
          {steps.map((step, index) => {
            const isCompleted = index < currentStep || isComplete;
            const isActive = index === currentStep;
            const isInactive = !isActive && !isCompleted;

            return (
              <li key={step.key} className="flex items-start gap-4 relative pb-14 cursor-pointer"
                  onClick={() => setCurrentStep(index)}>
                {/* Line connector */}
                {index !== steps.length - 1 && (
                  <div
                    className={cn(
                      'absolute left-[11px] top-5 w-0.5 h-full',
                      isCompleted ? 'bg-[#2BAEB3]' : 'bg-[#777E90]'
                    )}
                  />
                )}

                {/* Step icon */}
                <div
                  className={cn(
                    'w-6 h-6 rounded-full border-2 flex items-center justify-center relative z-10',
                    isActive
                      ? 'border-[#2BAEB3] bg-[#152122]'
                      : isCompleted
                        ? 'border-[#2BAEB3] bg-[#2BAEB3]'
                        : 'border-[#777E90] bg-[#152122]'
                  )}
                >
                  {(isActive || isInactive) && (
                    <div
                      className={cn(
                        'w-2 h-2 rounded-full',
                        isActive ? 'bg-[#2BAEB3]' : 'bg-[#777E90]'
                      )}
                    />
                  )}

                  {isCompleted && <Check className="w-3 h-3 text-black" />}
                </div>

                {/* Step title + description */}
                <div className="flex-1">
                  <div
                    className={cn(
                      'font-medium text-base',
                      isActive
                        ? 'text-[#777E90]'
                        : isCompleted
                          ? 'text-[#2BAEB3]'
                          : 'text-[#777E90]'
                    )}
                  >
                    {step.title}
                  </div>
                  <div
                    className={cn(
                      'text-[13px]',
                      isCompleted ? 'text-[#FFFFFF]' : 'text-[#777E90]'
                    )}
                  >
                    {step.description}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Step content */}
      <div className={`w-full bg-[#152122] p-6 rounded-sm h-full ${contentWidth}`}>
        <div>{children}</div>

        <div className="mt-10 flex items-center gap-5 justify-end border-t border-[#777E90] pt-5">
          <ButtonOutline
            disabled={currentStep === 0}
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            {backButtonText}
          </ButtonOutline>

          {isLastStep ? (
            <ButtonPrimary onClick={onSubmit}>
              {submitButtonText}
            </ButtonPrimary>
          ) : (
            <ButtonPrimary
              onClick={() => setCurrentStep(currentStep + 1)}
              disabled={currentStep === steps.length - 1}
            >
              {nextButtonText}
            </ButtonPrimary>
          )}
        </div>
      </div>
    </div>
  );
};

export { MySteps };
