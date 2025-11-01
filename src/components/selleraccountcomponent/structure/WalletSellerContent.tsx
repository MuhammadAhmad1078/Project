"use client";

import React, { useState } from "react";
import { ButtonSecondary, FlexBox, Heading, MyCard, Text } from "@/components/commoncomponents";
import { RadioGroup } from "@/components/ui/radio-group"
import RadioBtn from "@/components/commoncomponents/RadioBtn";
import { AddWalletModal } from "../modal";

const WalletSellerContent = () => {

    const [ visible, setVisible ] = useState(false)

    return (
        <div>    
            <FlexBox items="items-center" justify="justify-between" gap="gap-3">
                <div>
                    <Heading fontSize="text-base" color="text-[#E6E8EC]" className="m-0">Wallet Address</Heading>
                    <Text className="italic" fontSize='text-sm' color="text-[#D6D8E0]">You will receive the payment in the wallet, which you selected below.</Text>
                </div>
                <ButtonSecondary className='flex items-center gap-2' type="button" onClick={()=>setVisible(true)}>
                    Add new wallet
                </ButtonSecondary>
            </FlexBox>
            <div className="mt-10">  
                <RadioGroup defaultValue="metamask">
                    <MyCard className="bg-[#1C1E24] border-[#3F4352] mb-3">
                        <div className="px-3">
                            <RadioBtn 
                                value="metamask"
                                id='r1'
                                title="MetaMask"
                                subtitle="0x654323cFDF89457vd873"
                            />
                        </div>
                    </MyCard>
                    <MyCard className="bg-[#1C1E24] border-[#3F4352] mb-3">
                        <div className="px-3">
                            <RadioBtn 
                                value="coinbase"
                                id='r2'
                                title="CoinBase"
                                subtitle="0x654323cFDF89457vd873"
                            />
                        </div>
                    </MyCard>
                    <MyCard className="bg-[#1C1E24] border-[#3F4352] mb-3">
                        <div className="px-3">
                            <RadioBtn 
                                value="wallet"
                                id='r3'
                                title="Wallet Connect"
                                subtitle="0x654323cFDF89457vd873"
                            />
                        </div>
                    </MyCard>              
                </RadioGroup>             
            </div>
            <AddWalletModal 
                open={visible}
                onClose={()=>setVisible(false)}
            />
        </div>
    );
};

export { WalletSellerContent };