export type TFormValues = {
  title: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  amount: number;
  rating: number;
  id?: string;
  images?: string[];
};

export type TImage = {
  id: string;
  url: string;
};
