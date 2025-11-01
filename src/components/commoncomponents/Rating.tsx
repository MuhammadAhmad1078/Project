'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface RatingProps {
  value: number;
  max?: number;
  className?: string;
  starSize?: number;
}

const Rating: React.FC<RatingProps> = ({
  value,
  max = 5,
  className,
  starSize = 20,
}) => {
  const filledStars = Math.floor(value);
  const emptyStars = max - filledStars;

  return (
    <div className={cn('flex items-center gap-1', className)}>
      {Array.from({ length: filledStars }).map((_, i) => (
        <Image
          key={`filled-${i}`}
          src="/assets/icons/star-f.png"
          alt="filled star"
          width={starSize}
          height={starSize}
        />
      ))}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Image
          key={`empty-${i}`}
          src="/assets/icons/star-o.png"
          alt="empty star"
          width={starSize}
          height={starSize}
        />
      ))}
    </div>
  );
};

export { Rating };
