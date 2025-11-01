import React from 'react';

interface Props {
  title?: React.ReactNode;
  className?: string;
  childclass?: string;
  subtitle?:string;
  subClass?:string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
}

const Backbtn: React.FC<Props> = ({
  title,
  subtitle,
  className = '',
  childclass ='',
  subClass = '',
  onClick,
  type = 'button',
  children,
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
        <button
            type={type}
            onClick={onClick}
            className='border-0 hover:bg-transparent cursor-pointer'
        >
            <img src="/assets/icons/ar-bk.png" className='w-5' alt="" />
        </button>
        <div>
          <h5 className={`text-sm text-white ${childclass}`}>{title}</h5>
          <p className={`text-xs text-[#B1B5C3] font-normal ${subClass}`}>{subtitle}</p>
          {children}
        </div>
    </div>
  );
};

export { Backbtn };
