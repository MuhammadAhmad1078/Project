import React, { ReactNode } from 'react';
import Marquee from 'react-fast-marquee';
// import clsx from 'clsx'; // Optional: Uncomment if using class merging lib like `clsx`



interface MarqueeCommonProps {
  data: ReactNode;
  speed?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  className?: string;
  gradientWidth?: number;
  gradientColor?: string;
}

const MarqueeCommon: React.FC<MarqueeCommonProps> = ({
  data,
  speed = 100,
  direction = 'left',
  className = '',
  gradientWidth = 100,
  gradientColor = '#0D0E14',
}) => {

  return (
    <div className={`overflow-hidden mb-2 ${className}`}>
      <Marquee
        gradient
        gradientWidth={gradientWidth}
        gradientColor={gradientColor}
        speed={speed}
        direction={direction}
        autoFill
        pauseOnHover
      >
        {data}
      </Marquee>
    </div>
  );
};

export default MarqueeCommon;
