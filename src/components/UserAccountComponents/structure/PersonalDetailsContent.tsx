import React, { useState } from 'react';
import { HeadWithBtn, MyCard, Text } from '@/components/commoncomponents';
import { personalData } from '@/components/data/personalData';
import { EditPersonalDetails } from './EditPersonalDetails';

const PersonalDetailsContent = () => {

    const [ edit, setEdit ] = useState<boolean>(false)

    return (
        <div>
            {
                !edit ?
                <HeadWithBtn
                    title='Personal Details'
                    buttonLabel='Edit'
                    onClick={()=>setEdit(true)}
                    className='mb-5'
                />
                :
                <HeadWithBtn
                    title='Edit Personal Details'
                />
            }
            <MyCard className='border-[#173D40] bg-transparent rounded-sm my-5'>
                <div className='px-3'>
                    {
                        !edit ?
                        <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                            {personalData?.map((items, index) => (
                                <div key={index}>
                                    <Text color='text-[#777E90]' >{items.title}</Text>
                                    <Text color='text-white' fontSize='text-[13px]' >{items.desc}</Text>
                                </div>
                            ))}
                        </div>
                        :
                        <EditPersonalDetails setEdit={setEdit} />
                    }
                </div>
            </MyCard>
        </div>
    );
};

export { PersonalDetailsContent };
