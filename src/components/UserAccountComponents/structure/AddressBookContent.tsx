import React, { useState } from 'react';
import { HeadWithBtn, MyCard, Text } from '@/components/commoncomponents';
import { addressbookData } from '@/components/data/addressbookData';
import { EditAddressBook } from './EditAddressBook';

const AddressBookContent = () => {

    const [ edit, setEdit ] = useState<boolean>(false)

    return (
        <div>
            {
                !edit ?
                <HeadWithBtn
                    title='Address Book'
                    buttonLabel='Edit'
                    onClick={()=>setEdit(true)}
                    className='mb-5'
                />
                :
                <HeadWithBtn
                    title='Edit Address Book'
                />
            }
            <MyCard className='border-[#173D40] bg-transparent rounded-sm my-5'>
                <div className='px-3'>
                    {
                        !edit ?
                            <div className='grid md:grid-cols-1 grid-cols-1 gap-5'>
                                {addressbookData.map((block, i) => (
                                    <>
                                    <div className='grid grid-cols-2'>
                                        <Text color='text-[#777E90]' >{block.title}</Text>
                                        <Text color='text-white' fontSize='text-[13px]' >{block.desc}</Text>
                                    </div>
                                    <div className={`grid grid-cols-1 md:grid-cols-2`}>
                                        {
                                            block.inner.map((item, j) => (
                                            <div key={`${i}-${j}`} className='mb-3'>
                                                <Text color='text-[#777E90]' >{item.title}</Text>
                                                <Text color='text-white' fontSize='text-[13px]' >{item.desc}</Text>
                                            </div>
                                            ))
                                        }
                                    </div>
                                    </>
                                ))}
                            </div>
                        :
                        <EditAddressBook setEdit={setEdit} />
                    }
                </div>
            </MyCard>
        </div>
    );
};

export { AddressBookContent };
