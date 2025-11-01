import React, { ReactNode } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { Text } from './Text'

interface tooltipProps {
    children: ReactNode,
    title: string
}

const MyTooltip:React.FC<tooltipProps> = ({children,title}) => {
  return (
    <TooltipProvider>
      <Tooltip>
          <TooltipTrigger>{children}</TooltipTrigger>
          <TooltipContent>
              <Text fontSize='text-[13px]'>
                  {title}
              </Text>
          </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export {MyTooltip}