import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

interface Props {
    className?: string;
    url: string;
    imgsize?: string;
    imagename?: string;
}

const MyAvatar:React.FC<Props> = ({className='w-20 h-20',imgsize='w-20',imagename,url}) => {
  return (
    <Avatar className={className}>
        <AvatarImage src={url} className={imgsize} />
        <AvatarFallback>{imagename}</AvatarFallback>
    </Avatar>
  )
}

export {MyAvatar}