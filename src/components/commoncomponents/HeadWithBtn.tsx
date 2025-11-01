'use client';

import React from 'react';
import { ButtonSecondary } from './ButtonSecondary';

interface HeadWithBtnProps {
  title: string;
  buttonLabel?: string;
  onClick?: () => void;
  className?: string;
}

const HeadWithBtn: React.FC<HeadWithBtnProps> = ({
  title,
  buttonLabel = 'Edit',
  onClick,
  className = '',
}) => {
  return (
    <div className={`flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 ${className}`}>
      <h1 className='text-white text-xl font-semibold'>{title}</h1>
      {
        (buttonLabel && onClick) &&
        <ButtonSecondary className='rounded-xs' onClick={onClick}>
          {buttonLabel}
        </ButtonSecondary>
      }
    </div>
  );
};

export {HeadWithBtn};
