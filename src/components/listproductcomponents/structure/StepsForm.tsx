import React, { useState } from 'react';
import { MySteps } from '@/components/commoncomponents';
import { CategoryStepContent } from './CategoryStepContent';
import { ProductDetailStepContent } from './ProductDetailStepContent';
import { ProductGalleryStepContent } from './ProductGalleryStepContent';
import { DiscountStepContent } from './DiscountStepContent';
import { PreviewStepContent } from './PreviewStepContent';
import { PricingAndShipping } from './PricingAndShipping';
import { ProductVariantsContent } from './ProductVariantsContent';

interface Step {
  key: number;
  title: string;
  description: string;
  content: React.ReactNode;
}

const StepsForm = () => {

    const [currentStep, setCurrentStep] = useState(0);
    const steps: Step[] = [
        {
            key: 0,
            title: 'Category & Category Type',
            description: 'Add the title and category for your service.',
            content: <CategoryStepContent />,
        },
        {
          key: 1,
          title: 'Product Details & Description',
          description: 'Write a clear description and details of your product.',
          content: <ProductDetailStepContent />,
        },
        {
          key: 2,
          title: 'Product Gallery',
          description: 'Upload visuals to show your product.',
          content: <ProductGalleryStepContent />,
        },
        {
          key: 3,
          title: 'Pricing & Shipping',
          description: 'Add price, discount, and shipping details.',
          content: <PricingAndShipping />,
        },
        {
          key: 4,
          title: 'Products Variants',
          description: 'Add variants if available',
          content: <ProductVariantsContent />,
        },
        {
          key: 5,
          title: 'Preview',
          description: 'Review and launch your product.',
          content: <PreviewStepContent />,
        }
    ];

  return (
    <div className="mt-7">
      <MySteps
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        steps={steps} 
        sidebarWidth="lg:w-[30%]"
        contentWidth="lg:w-[70%]"
        backButtonText="Cancel"
        nextButtonText="Next"
        submitButtonText="Publish"
      >
        {steps[currentStep].content}
      </MySteps>
    </div>
  );
};

export { StepsForm };