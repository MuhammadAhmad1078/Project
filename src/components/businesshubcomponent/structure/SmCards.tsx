import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

type CardItem = {
    img: string;
    pimg: string;
    title: string;
    desc: string;
    rate: number;
    totalrate: number;
    uetamount: number;
    dollaramount: number;
  };
  
  type SizeClasses = {
    cardcs?: string;
    contentcs?: string;
    cardfooter?: string;
    imageHeight?: string;   
    titleSize?: string;    
    rateSize?: string;    
    badgeSize?: string;   
    proimg?: string;
    descSize?: string;
    amountCs?: string;
};

  type proCard = {
    data: CardItem[];
    sizes?: SizeClasses;
    showblurr?: boolean;
  };

const SmCards: React.FC<proCard> = ({data,sizes,showblurr}) =>  {

    const defaultClasses: Required<SizeClasses> = {
        cardcs: 'bg-[#152122] rounded-lg border-[#57532E] py-4',
        contentcs: 'px-2',
        cardfooter: 'border-t border-white p-0 px-0 mx-2',
        badgeSize: 'text-[8px]',
        imageHeight: 'h-[70px]',
        titleSize: 'md:text-[9px] text-sm',
        rateSize: 'md:text-[9px] text-xs',
        proimg: 'w-8 h-8',
        descSize: 'md:text-[10px] text-xs',
        amountCs: 'md:text-[9px] text-xs font-extrabold'
    };

    const mergedClasses = {
        ...defaultClasses,
        ...sizes,
    };

  return (
    <>
        {
            data?.map((items,index)=>
                <Card className={`${mergedClasses?.cardcs} relative gap-2 overflow-hidden`} key={index}>
                    {
                        showblurr &&
                        <div className='absolute top-0 left-0'>
                            <img src="/assets/images/blurry.png" className='w-[200px] z-1 opacity-35' alt="" />
                        </div>
                    }
                    <CardHeader className='px-4 relative'>
                        <img src={"/assets/images/"+items?.img} className={`${mergedClasses.imageHeight} aspect-3/2 object-cover w-full`} alt="" />
                    </CardHeader>
                    <CardContent className={mergedClasses?.contentcs}>
                        <div className='flex gap-3 items-center mb-3'>
                            <Avatar className={mergedClasses?.proimg}>
                                <AvatarImage src={"/assets/images/"+items?.pimg}  alt=""/>
                                <AvatarFallback>Product</AvatarFallback>
                            </Avatar>
                            <p className={`${mergedClasses?.titleSize} text-white font-bold`}>{items?.title}</p>
                        </div>
                        <p className={`${mergedClasses?.descSize} text-white m-0`}>
                            {items?.desc}
                        </p>
                    </CardContent>
                    <CardFooter className={mergedClasses?.cardfooter}>
                        <div className='flex gap-5 justify-between items-center w-full'>
                            <div className='inline-flex gap-1 items-center'>
                                <img src="/assets/images/star.svg" width={10} alt="" />
                                <span className={`${mergedClasses?.rateSize} text-[#D6D8E0]`}>{items?.rate}</span>
                                <span className={`${mergedClasses?.rateSize} text-[#D6D8E080]`}>({items?.totalrate})</span>
                            </div>
                            <p className={`${mergedClasses?.amountCs} m-0 text-[#D6D8E0]`}>
                                {items?.uetamount} UET (~ {items?.dollaramount}$)
                            </p>
                        </div>
                    </CardFooter>
                </Card>
            )
        }
    </>
  )
}

export { SmCards }