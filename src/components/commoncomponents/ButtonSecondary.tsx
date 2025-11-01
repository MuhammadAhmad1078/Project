import React from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (() => void) | (() => Promise<void>);
  type?: 'button' | 'submit' | 'reset';
}

const ButtonSecondary: React.FC<Props> = ({
  children,
  className = '',
  onClick,
  disabled = false, 
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        text-[13px] bg-[#0C666A] text-sm text-white px-6 font-medium
        border border-[#0C666A] rounded-sm h-[43px]
        hover:bg-[#25A7B0]
        cursor-pointer ${className}
      `}
        disabled={disabled}
    >
      {children}
    </button>
  );
};

export { ButtonSecondary };
