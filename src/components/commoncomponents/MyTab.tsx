import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface TabItem {
  key: string;
  name: string;
  content: React.ReactNode;
}

interface Props {
  tabs: TabItem[];
  defaultKey?: string;
  classhead?: string;
  center?: string
}

const MyTab: React.FC<Props> = ({ tabs, defaultKey, classhead, center }) => {
  return (
    <Tabs className={`${center}`} defaultValue={defaultKey || (tabs.length > 0 ? tabs[0].key : '')}>
      <TabsList className={`h-auto bg-transparent gap-3 flex-wrap `}>
        {tabs.map(({ key, name }) => (
          <TabsTrigger
            key={key}
            value={key}
            className={`cursor-pointer inline-flex bg-transparent border-[#23262F] data-[state=active]:bg-[#23262F] h-10 rounded-lg px-4 ${classhead}`}
          >
            <h3 className="text-sm text-[#FFFFFF]">{name}</h3>
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map(({ key, content }) => (
        <TabsContent key={key} value={key} className="mt-3">
          {content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export { MyTab };
