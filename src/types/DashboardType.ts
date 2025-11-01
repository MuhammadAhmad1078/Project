export interface OverviewData {
  values: (number | string)[];
}

export interface OverviewTitles {
  titles: string[];
}

export interface OverviewRating {
  rating: (number | null)[];
}
export interface DataItem {
  id: number;
  amount: string | number;
  title: string;
  rating?: number; 
}