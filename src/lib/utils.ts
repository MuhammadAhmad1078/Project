import {
  DataItem,
  OverviewData,
  OverviewRating,
  OverviewTitles,
} from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const randomImage = (images: { id: string; url: string }[] | null) => {
  if (!images || images.length === 0) {
    return {
      url: "https://via.placeholder.com/300x200?text=No+Image",
      id: "placeholder",
    };
  }
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

export function CardDataFunc(
  data: OverviewData,
  titles: OverviewTitles,
  rating?: OverviewRating
): DataItem[] {
  return data.values.map((value, index) => ({
    id: index + 1,
    amount: value,
    title: titles.titles[index] || "",
    ...(rating?.rating[index] !== undefined && rating?.rating[index] !== null
      ? { rating: rating.rating[index] }
      : {}),
  }));
}
