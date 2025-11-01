import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  image?:string;
  size?:number;
  onClick?: () => void;
}

const ButtonRounded: React.FC<Props> = ({ children, className='', image, size=20, onClick }) => {
  return (
    <button className="relative p-[2px] rounded-[50px] overflow-hidden" onClick={onClick}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0BF4FF] to-[#092728] rounded-[50px]"></div>
        <div className="relative px-6 py-2 rounded-[48px] bg-[#091C1D]">
            <div className='inline-flex gap-3 items-baseline'>
                <img src={image} width={size} alt="" />
                <span className={`text-[#FFFFFF] text-sm ${className}`}>
                    {children}
                </span>
            </div>
        </div>
    </button>
  );
};

export { ButtonRounded };