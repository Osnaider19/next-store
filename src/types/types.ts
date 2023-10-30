interface Image {
  url: string;
}
export type Products = {
  id: number;
  title: string;
  images: Image[];
  price: number;
  ranting: number;
  category : string,

};
