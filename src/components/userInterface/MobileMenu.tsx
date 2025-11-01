import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { FlexBox, MyDrawer } from '../commoncomponents';

interface MobileMenuProps {
    visible: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible, onClose }) => {

    const pathname = usePathname();

  return (

        <MyDrawer
            open={visible}
            onClose={onClose}
            title={
                <FlexBox items='items-center' justify='justify-between'>
                    <Link href={'/'}>
                        <img className="w-[100px] shrink-0" src='/assets/images/logo.png' />
                    </Link>
                </FlexBox>
            }
            className='!w-full'
        >
            <div className='ps-3'>
                <ul className='flex flex-col gap-5'>
                    <li>
                        <Link 
                            className={`text-base font-normal ${
                            pathname === '/' ? 'text-[#25A7B0]' : 'text-[#FCFCFD]'}`}  href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link className={`text-base font-normal ${
                            pathname === '/explore' ? 'text-[#25A7B0]' : 'text-[#FCFCFD]'}`} href={'/explore'}>Explore Services</Link>
                    </li>
                    <li>
                        <Link className={`text-base font-normal ${
                            pathname === '/explore' ? 'text-[#25A7B0]' : 'text-[#FCFCFD]'}`} href={'/explore'}>Browse Products</Link>
                    </li>
                </ul>
            </div>
        </MyDrawer>
  )
}

export {MobileMenu}