interface actualProducts {
  category: string;
  image: string;
  image_description: string;
  name: string;
  rating?: number;
  productId: number;
  price: string;
  discount?: string;
  price_range?: any;
}

interface topSellers {
  name: string;
  stars: number;
  featured?: boolean;
  image: string;
  id: number;
}

//zust
interface CounterStore {
  type: string;
  setAll: () => void;
  setVegetables: () => void;
  setDesserts: () => void;
  setDrinks: () => void;
}

interface HeartStore {
  heart: number[];
  toggleHeart: (id: number) => void;
}

interface CartStore {
  cart: number[];
  toggleCart: (id: number) => void;
}
