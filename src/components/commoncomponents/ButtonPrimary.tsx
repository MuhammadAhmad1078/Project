import React from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const ButtonPrimary: React.FC<Props> = ({ 
  children, 
  className = '', 
  disabled = false, 
  onClick,
  type = 'button',
}) => {
  return (
    <button 
      type={type}
      className={`
        bg-gradient-to-r from-[#0C666A] to-[#18C8D0] 
        px-6 py-3 rounded-lg
        relative
        cursor-pointer
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}
        transition-opacity
        ${className}
      `} 

      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      <span className={`text-[#FFFFFF] text-sm ${className}`}>
        {children}
      </span>
      {disabled && (
        <div className="absolute inset-0 rounded-lg bg-black/20" />
      )}
    </button>
  );
};

export { ButtonPrimary };