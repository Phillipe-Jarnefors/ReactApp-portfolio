export interface Product {
    _id: string;
    name: string;
    category: string;
    image: string;
    shortDesc: string;
    description: string;
    price: number;
    quantity: number;
    isDeleted: boolean;
    isAvailable: boolean;
  }

  export const ProductCategories: string[] = [
    "hamburger",
    "drink",
    "dessert"
  ]

  