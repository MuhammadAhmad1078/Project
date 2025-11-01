import React from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
  onClick?: (() => void) | (() => Promise<void>);
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const ButtonSecondaryOutline: React.FC<Props> = ({ children, className='', onClick, disabled = false, type = 'button' }) => {
  return (
    <button 
      type={type}
      disabled={disabled}
      className={`text-[13px] bg-transparent text-sm px-6 font-medium border rounded-sm h-[43px] border-[#0C666A] text-[#25A7B0] hover:bg-[#0C666A] hover:text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#25A7B0] ${className}`} 
      onClick={disabled ? undefined : onClick}
    >
        {children}
    </button>
  );
};

export { ButtonSecondaryOutline };