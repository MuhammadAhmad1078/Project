'use client';

import React from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface PopupImageProps {
  open: boolean;
  onClose: () => void;
  imageUrl: string | null;
}

const PopupImage: React.FC<PopupImageProps> = ({ open, onClose, imageUrl }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-3xl bg-[#081516] p-6 rounded-xl border-0 flex items-center justify-center">
        <DialogTitle hidden />
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="Selected"
            width={800}
            height={600}
            className="rounded-lg max-h-[80vh] w-auto object-contain"
          />
        ) : (
          <p className="text-white">No image selected</p>
        )}
      </DialogContent>
    </Dialog>
  );
};

export { PopupImage };
