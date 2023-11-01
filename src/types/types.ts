interface Image {
  url: string;
}
export type Products = {
  id: number;
  title: string;
  price: number;
  images: Image[];
  amount?: number;
  ranting: number;
};

export type UnitsItems = {
  name: string;
  quantity: string;
  description: string;
  category: "DIGITAL_GOODS" | "DONATION" | "PHYSICAL_GOODS";
  unit_amount: {
    currency_code: string;
    value: string;
  };
};
