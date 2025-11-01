"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type CardItem = {
    img: string;
    title: string;
    owner: string;
    price: string;
    status?: string;
    statusimg?:string;
    badgeimg?: string;
    rewards?: number;
    awardicon?: string;
  };
  
  type productItem = {
    data: CardItem[];
    title: string;
    buttonText?: string;
    path: string;
    click?: (value: boolean) => void;
  };

const ProductSlider: React.FC<productItem> = ({data,title,path,buttonText = "Sell Now",}) => {

    const router = useRouter()
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        slides: {
            perView: 2,
            spacing: 10,
        },
        breakpoints: {
            "(min-width: 640px)": {
                slides: { perView: 2, spacing: 30 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 4, spacing: 30 }, 
            },
        },
    });

    

    return (
        <div className="relative md:w-[88%] w-[95%] mx-auto pt-10">
            <div className="flex justify-between items-center mb-5">
                <h1 className="text-[#FCFCFD] text-2xl font-bold">
                    {title}
                </h1>
                <div className="">
                    <Button onClick={()=>router.push(path)} variant={"secondary"} className="bg-[#23262F] text-[#E6E8EC] border-[#23262F] hover:bg-[#E2BF4B] hover:text-[#23262F]">
                        View All
                    </Button>
                </div>
            </div>
            <div className="relative">
                <button 
                    onClick={() => instanceRef.current?.prev()} 
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#23262F] w-[40px] h-[40px] text-white rounded-full flex justify-center items-center z-10 cursor-pointer"
                >
                    <img src="/assets/icons/prev.png" width={34} alt="prevbtn" />
                </button>
                <div ref={sliderRef} className="keen-slider">
                    {data?.map((items: { img: string, title: string, owner: string, price: string, badgeimg?:string, statusimg?:string, status?:string, rewards?:number, awardicon?:string }, index: number) => (
                        <div key={index} className="keen-slider__slide">
                            <div className="h-full relative group">
                                <img src={"/assets/images/" + items?.img} className="h-full w-full border border-[#3F4352] rounded-2xl" alt="" />
                                {
                                    items.status === 'New'?
                                    <div className="absolute badge -top-1 -left-3">
                                        <img src={"/assets/images/"+items?.badgeimg} alt="" width={110} />
                                    </div>
                                    :
                                    items.status&&
                                    <div className="absolute badge -top-1 -left-3">
                                        <img src={"/assets/images/"+items?.badgeimg} alt="" width={110} />
                                    </div>
                                }
                                {
                                    items.status === 'New' ?
                                    <Button type="button" className="absolute badge top-4 right-4 bg-[#E2464A] inline-flex items-center gap-1">
                                        <img src={"/assets/icons/"+items?.statusimg} width={12} alt="" />
                                        <span className="text-xs">{items?.status}</span>
                                    </Button>
                                    :
                                    items.status&&
                                    <Button type="button" className="absolute badge top-4 right-4 bg-[#00F52780] inline-flex items-center gap-1">
                                        <img src={"/assets/icons/"+items?.statusimg} width={12} alt="" />
                                        <span className="text-xs">{items?.status}</span>
                                    </Button>
                                }
                                <div className="absolute bottom-0 left-0 w-full transform translate-y-full group-hover:translate-y-0 transition-all duration-300" style={{ backgroundColor: "rgba(0, 0, 0, .5)", backdropFilter: "blur(8px)" }}>
                                    <div className="p-4">
                                        <div className="flex justify-between items-center">
                                            <h4 className="font-medium text-sm text-[#FCFCFD] mb-2">{items?.title}</h4>
                                            {
                                                items?.rewards&&
                                                <div className="flex gap-1 items-center">
                                                    <span className="text-base text-[#E2BF4B]">{items?.rewards}</span>
                                                    <img src={"/assets/icons/"+items?.awardicon} width={18} alt="" />
                                                </div>
                                            }
                                        </div>
                                        <div className="flex justify-between md:flex-row flex-col items-center gap-1">
                                            <div className="flex gap-1 items-center bg-[#212429] py-2 px-3 justify-center rounded-lg">
                                                <img src="assets/icons/mage_stars.png" width={16} alt="" />
                                                <h4 className="text-xs text-[#FCFCFD]">{items?.owner}</h4>
                                            </div>
                                            <p className="text-[#D6D8E0] text-xs font-semibold">{items?.price} UET</p>
                                        </div>
                                    </div>
                                    <button onClick={()=>router.push(path)} className="w-full border-[#E2BF4B] text-sm font-medium border rounded-br-lg rounded-bl-lg py-3 px-6 text-[#141416] hover:bg-transparent hover:text-[#E2BF4B] transition-colors bg-[#E2BF4B] cursor-pointer">
                                        {buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button 
                    onClick={() => instanceRef.current?.next()} 
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#23262F] w-[40px] h-[40px] text-white rounded-full flex justify-center items-center z-10 cursor-pointer"
                >
                    <img src="/assets/icons/next.png" width={34} alt="nextbtn" />
                </button>
            </div>
        </div>
    );
};

export { ProductSlider };
