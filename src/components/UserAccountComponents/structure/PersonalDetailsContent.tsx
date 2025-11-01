import React, { useState } from 'react';
import { HeadWithBtn, MyCard, Text } from '@/components/commoncomponents';
import { EditPersonalDetails } from './EditPersonalDetails';
import { useAuthStore } from '@/store/useAuthStore';

const PersonalDetailsContent = () => {

    const [ edit, setEdit ] = useState<boolean>(false)
    const { user } = useAuthStore()

    // Build personal data from user object
    const personalData = [
        {
            title: 'Full Name',
            desc: user?.userName || 'Not provided'
        },
        {
            title: 'Email Address',
            desc: user?.email || 'Not provided'
        },
        {
            title: 'Mobile Number',
            desc: 'Not provided'
        },
        {
            title: 'Birthday',
            desc: 'Not provided'
        },
        {
            title: 'Gender',
            desc: 'Not provided'
        },
    ]

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
