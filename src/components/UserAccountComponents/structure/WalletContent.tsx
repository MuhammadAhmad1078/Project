import React from 'react';
import { ButtonSecondary, FlexBox, HeadWithBtn } from '@/components/commoncomponents';

const WalletContent = () => {
    return (
        <div className='h-full'>
            <HeadWithBtn
                title='Wallet'
            />
            <FlexBox items='items-center' justify='justify-center' className='h-[50vh] w-full my-5'>
                <ButtonSecondary>
                    Connect Wallet Now
                </ButtonSecondary>
            </FlexBox>
        </div>
    );
};

export { WalletContent };
