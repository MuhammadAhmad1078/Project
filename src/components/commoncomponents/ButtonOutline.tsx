import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const ButtonOutline: React.FC<Props> = ({ 
  children, 
  className = 'bg-[#091516]', 
  disabled = false, 
  onClick,
  type = 'button', 
}) => {
  return (
    <button 
      type={type}
      className={`relative p-[1px] overflow-hidden group  ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} 
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      <div className={`absolute inset-0 bg-gradient-to-r from-[#0C666A] to-[#18C8D0] rounded-lg ${
        disabled ? 'hidden' : ''
      }`}></div>
      <div className={`relative px-6 py-3 rounded-lg ${
        disabled ? '' : 'hover:bg-[#0C666A]/90'
      } transition-all ${className}`}>
        <span className={`text-[#FFFFFF] text-sm`}>
          {children}
        </span>
      </div>
    </button>
  );
};

export { ButtonOutline };