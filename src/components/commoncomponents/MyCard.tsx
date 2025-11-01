'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

interface MyCardProps {
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  header?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  classContent?: string;
  classFooter?: string;
}

const MyCard: React.FC<MyCardProps> = ({
  title,
  description,
  footer,
  children,
  header,
  className = '',
  onClick,
  classContent = '',
  classFooter = ''
}) => {
  return (
    <Card className={`bg-[#1C1E24] border-[#3F4352] ${className}`} onClick={onClick}>
      {(title || header || description) && (
        <CardHeader>
          {header}
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className={`px-3 ${classContent}`}>
        {children}
      </CardContent>
      {footer && <CardFooter className={classFooter}>{footer}</CardFooter>}
    </Card>
  );
};

export { MyCard };
