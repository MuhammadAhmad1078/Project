interface Type {
  id: string;
  name: string;
  products: {
    id: string;
    name: string;
  }[];
}

export interface Category {
  id: string;
  name: string;
  types: Type[];
}
