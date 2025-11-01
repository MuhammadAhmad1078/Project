import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

type breadcrumbProp = {
    name: string;
    path: string;
}

interface Props {
    breadcrumb?: breadcrumbProp[];
    endname?: string;
    basename?: string;
    homepath?: string
}

const CustomBreadCrumb: React.FC<Props>=({breadcrumb,homepath,basename,endname}) => {
  return (
    <div>
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href={homepath || '/'} className='text-[#757C8E] hover:text-[#757C8E] '>
                        <div className='inline-flex items-center gap-2'>
                            <img src="/assets/icons/homeic.png" width={16} alt="" />{basename}
                        </div>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {
                    breadcrumb?.map((item,index)=>
                        <React.Fragment key={index}>
                            <BreadcrumbItem>
                                <BreadcrumbLink className='text-[#757C8E] hover:text-[#757C8E] ' href={item?.path}>{item?.name}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                        </React.Fragment>
                    )
                }
                <BreadcrumbItem>
                    <BreadcrumbPage className='text-[#25A7B0]'>{endname}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>

    </div>
  )
}

export {CustomBreadCrumb}