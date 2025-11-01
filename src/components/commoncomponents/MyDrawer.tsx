import React, { ReactNode } from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from '@/components/ui/drawer';
import { X } from 'lucide-react';

interface MyDrawerProps {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
  showClose?: boolean;
  direction?: 'left' | 'right' | 'bottom' | 'top'
}

const MyDrawer: React.FC<MyDrawerProps> = ({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  className,
  direction = 'left',
  showClose = true,
}) => {
  return (
    <Drawer open={open} onOpenChange={onClose} direction={direction}>
      <DrawerContent className={`bg-[#081516] !border-0 ${className || ''}`}>
        {showClose && (
          <DrawerClose className="absolute right-4 top-4 text-muted-foreground hover:text-white">
            <X className="h-5 w-5" />
          </DrawerClose>
        )}
        {(title || description) && (
          <DrawerHeader>
            {title && <DrawerTitle>{title}</DrawerTitle>}
            {description && <DrawerDescription>{description}</DrawerDescription>}
          </DrawerHeader>
        )}

        <div className="py-4 px-4">
          {children}
        </div>

        {footer && (
          <DrawerFooter>
            {footer}
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export { MyDrawer };
