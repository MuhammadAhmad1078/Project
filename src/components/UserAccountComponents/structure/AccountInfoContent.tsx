import React from 'react';
import { Heading, MyCard, Text } from '@/components/commoncomponents';
import { accountData } from '@/components/data';

const AccountInfoContent = () => {
  return (
    <div>
      <Heading type='pageHeading' title='Hello, Kevin' headClass='!text-xl' />
      {accountData?.map((items, index) => (
        <MyCard className='border-[rgb(23,61,64)] bg-transparent rounded-sm mb-5 text-white' key={index}
          title={items?.title}
        >
          <div className='grid md:grid-cols-2 grid-cols-1 gap-5 px-3'>
            {items?.details?.map((subitems, subIndex) => {
              if ('inner' in subitems) {
                return (
                  <div key={subIndex}>
                    <div key={subIndex} className='mb-3 grid grid-cols-2'>
                      <Text color='text-[#777E90]' >{subitems.title}</Text>
                      <Text color='text-white' fontSize='text-[13px]' >{subitems.desc}</Text>
                    </div>
                    <div className={`grid grid-cols-2`}>
                      {subitems.inner.map((innerItem, innerIndex) => (
                      <div key={innerIndex} className='mb-3'>
                        <Text color='text-[#777E90]' >{innerItem.title}</Text>
                        <Text color='text-white' fontSize='text-[13px]' >{innerItem.desc}</Text>
                      </div>
                    ))}
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={subIndex}>
                    <Text color='text-[#777E90]' >{subitems.title}</Text>
                    <Text color='text-white' fontSize='text-[13px]' >{subitems.desc}</Text>
                  </div>
                );
              }
            })}
          </div>
        </MyCard>
      ))}
    </div>
  );
};

export { AccountInfoContent };
