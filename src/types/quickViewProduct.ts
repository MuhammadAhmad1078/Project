export type ProductImage = {
  id: string;
  url: string;
};

export type ProductAttribute = {
  id: string;
  title: string;
  value: string;
};

export type ProductCategory = {
  id: string;
  name: string;
};

export type ProductType = {
  id: string;
  name: string;
};

export type Seller = {
  id: string;
  userName: string | null;
  image: string | null;
  gender: string | null;
  email: string | null;
  description: string | null;
  country: string | null;
  banner: string | null;
  balance: number;
  x: string | null;
  creatorEarning: number | null;
  createdAt: string;
};

export type Offer = {
  id: string;
  createdAt: string;
  price: number;
  offerAt: string;
  sellerSignature: string | null;
  status: string;
};

export type review = {
  id: string;
  rating: number;
  comment: string;
  images: ProductImage[];
  createdAt: string;
  reviewer: {
    id: string;
    userName: string;
  };
};

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
  images: ProductImage[];
  category: ProductCategory;
  attributes: ProductAttribute[];
  type: ProductType;
  discount: number;
  reviews: review[];
  seller: Seller;
  salesCount: number;
  sellCount: number;
  offers: Offer[] | null;
  isFeature: boolean;
  isForSale: boolean;
  sku: string | null;
  sellerSignature: string | null;
  tokenId: string;
};

export type GetProductByIdResponse = {
  reviewCount: number;
  avgRating: number;
  product: Product;
};

export interface ProductDetailProps {
  data: GetProductByIdResponse;
}


export type orderlist = {
  id: string;
  orderId: string;
  trackId: string;
  proImage: string;
  proName: string;
  status: string;
  price: string;
  quantity: string;
  totalcost: string;
  chaincoin: string;
  date: string;
  variant?: string;
};