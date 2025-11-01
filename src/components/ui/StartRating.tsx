import React from 'react';

const StarRating = ({ rating }: { rating: number }) => {
  const totalStars = 5;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: totalStars }, (_, i) => {
        const fillPercent = Math.max(0, Math.min(1, rating - i)) * 100;
        return (
          <div key={i} className="relative w-5 h-5 text-[#96969652]">
            {/* Empty Star */}
            <svg
              className="absolute top-0 left-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z"
              />
            </svg>

            {/* Filled Star */}
            <svg
              className="absolute top-0 left-0 text-[#ea4918]"
              style={{
                clipPath: `inset(0 ${100 - fillPercent}% 0 0)`,
              }}
              fill="currentColor"
              stroke="none"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
            </svg>
          </div>
        );
      })}
    </div>
  );
};

export { StarRating };

