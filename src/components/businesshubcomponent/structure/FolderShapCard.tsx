import React, { ReactNode } from 'react';

interface FolderShapCardProps {
  children: ReactNode;
  clip?: number;
}

const FolderShapCard: React.FC<FolderShapCardProps> = ({ children, clip = 1 }) => {
  const clipPathStyle = clip === 1 
    ? 'polygon(0% 0%, 70% 0%, 80% 10%, 100% 10%, 100% 100%, 0% 100%)' 
    : 'polygon(100% 0%, 30% 0%, 20% 10%, 0% 10%, 0% 100%, 100% 100%)';

  return (
    <div
      className="px-6 pt-6 bg-gradient-to-br from-[#123234] to-[#0f1e1f] rounded-lg"
      style={{
        clipPath: clipPathStyle
      }}
    >
      {children}
    </div>
  );
};

export { FolderShapCard };