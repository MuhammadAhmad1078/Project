import Link from 'next/link';
import React from 'react';
import { NewsLetter } from '../browseproductcomponent';
import { FlexBox, Heading, Text } from '../commoncomponents';
import { Separator } from '../ui/separator';

const Footer = () => {
    const list = [
        {
            title: 'Explore',
            itemlist: [
                { name: 'UE-DAPP', path: '/uedapp' },
                { name: 'Marketplace', path: '/' },
                { name: 'UE Scan', path: '/' },
                { name: 'Whitepaper', path: '/' }
            ]
        },
        {
            title: 'Wallet & Exchanges',
            itemlist: [
                { name: 'UE-Wallet', path: '/' },
                { name: 'UE-Exchange', path: '/' },
                { name: 'Prelaunch Sale', path: 'https://underground-empire-website-frontend.vercel.app/prelaunchtoken' }
            ]
        },
        {
            title: 'Partners',
            itemlist: [
                { name: 'Creators Industry', path: '/' },
                { name: 'BKS', path: '/' },
                { name: 'GTA', path: '/' },
                { name: 'HDE', path: '/' }
            ]
        },
        {
            title: 'Legal',
            itemlist: [
                { name: 'Privacy Policy', path: 'https://underground-empire-website-frontend.vercel.app/privacy' },
                { name: 'User Agreement', path: 'https://underground-empire-website-frontend.vercel.app/useagreement' }
            ]
        },
    ];

    const social = [
        {
            name:'fb',
            path:''
        },
        {
            name:'inst',
            path:''
        },
        {
            name:'tw',
            path:''
        },
        {
            name:'discord',
            path:''
        },
        {
            name:'twitch',
            path:''
        },
    ]

    return (
        <div>
            <NewsLetter />
            <div className='md:w-[88%] w-[95%] mx-auto mt-20'>
                <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 lg:gap-20 gap-10 py-10'>
                    <FlexBox items='items-center md:items-start' direction='flex-col ' className='mb-3'>
                        <Link href={'https://underground-empire-website-frontend.vercel.app'}>
                            <img src='/assets/images/logo.png' className='w-[120px]' alt='Underground Empire Logo' />
                        </Link>
                        <Text className='mb-5 mt-3' weight='font-medium' color='text-[#E6E8EC]'>The world is here.</Text>
                        <div className='inline-flex gap-2 items-center'>
                            {social.map((icon, idx) => (
                                <Link key={idx} href={icon?.path}>
                                    <img src={`/assets/icons/${icon?.name}.png`} width={20} alt={`${icon?.name} icon`} />
                                </Link>
                            ))}
                        </div>
                    </FlexBox>
                    {list.map((item, index) => (
                        <div key={index} className='md:pt-10'>
                            <Heading fontSize='text-base' weight='font-medium' color='text-[#E6E8EC]' className='mb-5'>{item.title}</Heading>
                            <ul>
                                {item.itemlist.map((li, idx) => (
                                    <li key={idx} className='mb-1'>
                                        <Link href={li?.path}>
                                            <Text color='text-[#B1B5C3]' weight='font-medium'>
                                                {li?.name}
                                            </Text>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                {/* <div className=' w-full '></div> */}
                <Separator className='bg-[#23262F] w-full' />
                <div className='py-3 text-center'>
                    <Text fontSize='text-xs' color='text-[#777E90]'>
                        © {new Date().getFullYear()} Underground Empire. All Rights Reserved.
                    </Text>
                </div>
            </div>
        </div>
    );
};

export { Footer };
