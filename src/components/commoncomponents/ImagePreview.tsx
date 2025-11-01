'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface ImagePreviewProps {
  src: string
  alt?: string
  previewSize?: string 
  className?: string,
  preview?: boolean,
  imgClass?: string
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ src, alt = '', previewSize = 'h-20 w-20', className, preview=true, imgClass='object-cover' }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        className={`relative rounded-lg border-2 border-white overflow-hidden group  ${previewSize} ${className} ${preview && 'cursor-pointer'}`}
      >
        {
          preview&&
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 z-10"></div>
        }
        <Image
          src={src}
          alt={alt}
          fill
          className={imgClass}
          onClick={() => setOpen(true)}
        />

        {
          preview&&
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <Button
              onClick={() => setOpen(true)}
              className="w-8 h-8 group-hover:scale-100 scale-0 bg-white p-2 rounded-full flex items-center justify-center hover:bg-[#0C666A] transition-all duration-300 hovereffect cursor-pointer"
            >
              <Image src="/assets/icons/eye.png" width={20} height={20} alt="preview icon" />
            </Button>
          </div>
        }
      </div>

      {
        preview&&
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="bg-[#081516] p-0 border-0 max-w-3xl 
             [&>button]:bg-[#0A1B1C] 
            [&>button]:text-white 
            [&>button]:border 
            [&>button]:border-white 
            [&>button]:w-10 
            [&>button]:h-10 
            [&>button]:text-2xl 
            [&>button]:hover:bg-[#122325]
            [&>button]:flex
            [&>button]:items-center
            [&>button]:justify-center
            [&>button]:rounded-lg
            [&>button]:focus:ring-0
            [&>button]:focus-visible:ring-0
            [&>button]:cursor-pointer
          ">
            <Image src={src} alt={alt} width={800} height={600} className="rounded-lg w-full h-auto object-contain" />
          </DialogContent>
        </Dialog>
      }
    </>
  )
}

export { ImagePreview }
