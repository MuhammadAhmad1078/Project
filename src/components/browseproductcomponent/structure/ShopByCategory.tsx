import { useEffect } from "react";
import Link from "next/link";
import { useLazyQuery } from "@apollo/client";
import { GET_ALL_CATEGORIES } from "@/graphql";
import { FlexBox, Heading, MyCard, Text } from "@/components/commoncomponents";

interface CategoryItem {
  id: string;
  image?: string;
  name: string;
  products?: {
    id: string;
    name: string;
    description: string;
  }[];
}

const ShopByCategory = () => {
  const [loadData, { data }] = useLazyQuery(GET_ALL_CATEGORIES, {
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div className="mt-15">
      <FlexBox justify="justify-between" items="items-center" className="mb-5">
        <Heading
          type="pageHeading"
          title="Shop By Categories"
          headClass="text-xl font-bold"
        />
        <Link
          href={"/shop"}
          className="bg-[#23262F] py-3 px-4 rounded-lg text-white border-0 text-sm hover:bg-[#0C666A]"
        >
          View All
        </Link>
      </FlexBox>
      <div className="grid md:grid-cols-3 lg:grid-cols-6 grid-cols-2 gap-5">
        {data?.getCategories
          ?.slice(0, 6)
          ?.map((items: CategoryItem, index: number) => (
            <MyCard
              className="bg-[#10282B] border-0 h-full text-center rounded-sm"
              key={index}
            >
              <Link href={`/browseproducts/${items?.name}`}>
                {items?.image ? (
                  <div className="w-full h-[130px] relative">
                    <img
                      src={items.image}
                      className="w-full h-full object-contain"
                      alt={items.name}
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.currentTarget.src =
                          "https://via.placeholder.com/300x200?text=No+Image";
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-full h-[130px] flex items-center justify-center bg-[#172427]">
                    <Text
                      weight="font-medium"
                      color="text-gray-400"
                      className="text-xs"
                    >
                      No Image
                    </Text>
                  </div>
                )}
                <Text weight="font-medium" color="text-white">
                  {items?.name}
                </Text>
              </Link>
            </MyCard>
          ))}
      </div>
    </div>
  );
};

export { ShopByCategory };
