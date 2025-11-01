'use client'

import { useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { FlexBox } from '@/components/commoncomponents'

const MainSlideBanner = () => {
  const [hovered, setHovered] = useState<number | null>(1)

  const blocks = [
    { id: 1, img: 'pro-1.jpg', path: '/' },
    { id: 2, img: 'pro-2.jpg', path: '/' },
    { id: 3, img: 'pro-3.jpg', path: '/' },
    { id: 4, img: 'pro-4.jpg', path: '/' },
  ]

  return (
    <div >
        <div className="h-[500px]">
            <FlexBox direction='flex-col lg:flex-row' gap='gap-4' className='h-full gap-4 transition-all'>
                {blocks.map((block) => (
                <div
                    key={block.id}
                    className={clsx(
                    'rounded-lg transition-all duration-500 ease-in-out cursor-pointer border border-[#25A7B0] overflow-hidden',
                    hovered === block.id
                        ? 'flex-[10]'
                        : 'flex-[1]'
                    )}
                    onMouseEnter={() => setHovered(block.id)}
                    onMouseLeave={() => setHovered(1)}
                >
                    <Link href={block.path}>
                    <img
                        src={`/assets/images/${block.img}`}
                        alt=""
                        className="w-full h-full object-cover rounded-lg"
                    />
                    </Link>
                </div>
                ))}
            </FlexBox>
        </div>
    </div>
  )
}

export { MainSlideBanner }
